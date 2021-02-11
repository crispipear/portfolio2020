export const state = () => ({
  caseStudies: [],
  projects: [],
  intro: {},
  about: {}
})

export const mutations = {
  SET_PROJECTS(state, data) {
    state.projects = data;
  },
  SET_CASE_STUDIES(state, data) {
    state.caseStudies = data;
  },
  SET_INTRO_CONTENT(state, data){
    state.intro = data
  },
  SET_ABOUT_CONTENT(state, data){
    state.about = data
  }
}
export const actions = {
  async nuxtServerInit({
    commit
  }, app) {
    const projectsDoc = await app.$prismic.api.query(
      app.$prismic.predicates.at('document.type', 'project'), {
        orderings: '[my.project.order_id]'
      }
    );
    const csDoc = await app.$prismic.api.query(
      app.$prismic.predicates.at('document.type', 'case_study'), {
        orderings: '[my.case_study.order]'
      }
    );
    const introDoc = await app.$prismic.api.getSingle('intro');
    const aboutDoc = await app.$prismic.api.getSingle('about');

    commit('SET_PROJECTS', projectsDoc.results.map(item => item.data));
    commit('SET_CASE_STUDIES', csDoc.results.map(item => ({
      ...item.data,
      ref: item.uid
    })));
    commit('SET_INTRO_CONTENT', introDoc.data);
    commit('SET_ABOUT_CONTENT', aboutDoc.data);
  }
}
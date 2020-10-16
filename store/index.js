export const state = () => ({
    caseStudies: [],
    projects: []
})
  
export const mutations = {
    SET_PROJECTS(state, data) {
        state.projects = data;
    },
    SET_CASE_STUDIES(state, data){
        state.caseStudies = data;
    }
}
export const actions = {
    async nuxtServerInit({commit}, app) {
        const projectsDoc = await app.$prismic.api.query(
            app.$prismic.predicates.at('document.type', 'project'),
            {orderings: '[my.project.order_id]'}
        );
        const csDoc = await app.$prismic.api.query(
            app.$prismic.predicates.at('document.type', 'case_study'),
            {orderings: '[my.case_study.order]'}
        );
        commit('SET_PROJECTS', projectsDoc.results.map(item => item.data));
        commit('SET_CASE_STUDIES', csDoc.results.map(item => ({...item.data, ref: item.uid})));
    }
}
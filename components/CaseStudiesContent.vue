<template>
	<div class="cs__wrapper">
    <component
        :key="slice.slice_type+index"
        v-for="(slice, index) in body"
        :is="slices[slice.slice_type]"
        v-bind="{...slice.primary, items: slice.items}"
        class="cs__slice"
    />
	</div>
</template>
<script>
import CSImage from './slices/CSImage';
import ImagesList from './slices/ImagesList';
import Grid from './slices/Grid';
import SingleText from './slices/SingleText';
import DoubleText from './slices/DoubleText';
import TextRow from './slices/TextRow';
import TextImage from './slices/TextImage';
import VideoIntro from './slices/VideoIntro';

export default {
	props: {
		body: Array
	},
  components: {
    CSImage,
    ImagesList,
    Grid,
    SingleText,
    DoubleText,
    TextRow,
    TextImage,
    VideoIntro,
  },
  data() {
    return {
      slices: {
        image: "CSImage",
        images_list: "ImagesList",
        grid: "Grid",
        single_text: "SingleText",
        double_text: "DoubleText",
        text_row: "TextRow",
        text_image: "TextImage",
        video_intro: "VideoIntro",
      }
    }
  }
}
</script>
<style lang="scss">
	.cs{
		&__wrapper{
			padding: 12vh 0;
		}
  }
  .cs__slice{
    padding: $spacing-xl 0;
    .header *{
      font-size: $fs-m;
    }
    .text{
      @extend .text-body;
      font-size: $fs-xs;
    }
    ul, ol {
      padding: 0 0 $spacing-xs;
      list-style: none;
    }
    a {
      @extend .link-hover;
    }
  }
</style>
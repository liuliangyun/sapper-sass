<script context="module">
  import { getPageInfo } from "../node-utils/pages"

  // get page config json data, i.e. [pid].json
	export async function preload({ params, query }) {
    console.log("preload: ",params.pid)
    const page = getPageInfo(params.pid)
    return {
      pageDetail: page.pageDetail
    };
  }
</script>

<script>
  import PageContainer from '../core/PageContainer/index.svelte';
  export let pageDetail;
</script>

<style>

</style>

<PageContainer {pageDetail} />


<script>
	import CampaignHero from '../components/CampaignHero/hero.svelte';

	let hero = {
		url: "#lto-items",
		image_desktop: "https://www-static.chinacdn.stg.starbucks.com.cn/assets/images/featured/2020summer3/SUM3-KV-BEV.jpg",
		image_mobile: "https://www-static.chinacdn.stg.starbucks.com.cn/assets/images/featured/2020summer3/SUM3-KV-BEV-mobile.jpg",
		title: '茶做的云 轻轻放纵',
		article: `
			星巴克茶云乌龙系列清新上市。<br>
			精选特级高山乌龙，新鲜调制甘醇乌龙茶汤，<br>
			千次搅打成“云”，茶云绵密细腻，<br>
			零脂*不含奶，清爽宜人。<br>
			细密茶云包裹甘甜水果果汁与甜脆果丁，<br>
			茶韵果香在味蕾缓缓释放，美妙口感，轻轻放纵。<br><br>
			<small>*参考GB28050-2011《食品安全国家标准 预包装食品营养标签通则》</small>`
  };
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<CampaignHero {hero} />
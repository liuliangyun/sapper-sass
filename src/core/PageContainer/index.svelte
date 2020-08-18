<script>
  import { COMPONENT__ID_MAPPER, validateComponentId } from "./component";

  export function renderByComponent(component, context) {
    let componentInfo = context.components.find((c) => c.id === component.id);
    if (!validateComponentId(component.id)) {
      throw new Error(
        `Page find component: ${component.id} error, Pls check page data. PageId: [${context.id}]`
      );
    }
    return COMPONENT__ID_MAPPER[component.id](componentInfo ? componentInfo.content : null, context);
  }

  export let pageDetail;
</script>

<style lang="scss">
  @import './scss/main.scss';
	:global(body) {
		font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
		font-size: 16px;
		font-size: 1.6rem;
		font-weight: normal;
		line-height: 1.6; 
		background: rgb(247,247,247);
		color: rgba(0, 0, 0, 0.87);
		-webkit-font-smoothing: antialiased;
		letter-spacing: 0.4px;
	}
	#content {
		position: relative;
		overflow: hidden;

		@include breakpoint(up_to_desktop) {
			padding-bottom: $space;
			padding-top: $space;
			// for frap button
			body.page-menu & {
				padding-bottom: 120px;
			}
		}
		@include breakpoint(desktop) {
			left: auto;
			margin-left: $panel;
			padding-bottom: $space;
			padding-top: $space;
			width: 100 - $panel;
		} 
		//layout change on mobile for box with submit button
		@include breakpoint(mobile) {
			padding-bottom: $navbar;
			//iphoneX hack
			@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
				padding-bottom: $navbar + 15px;
			}
		}
		.section {
			clear: both;
			@include clearfix;
			@include breakpoint(mobile) {
				padding-bottom: $space/2;
				padding-top: $space/2;
				&:first-child {
					padding-top: 0;
				}
				&:last-child {
					padding-bottom: 0;
				}
			}
			@include breakpoint(tablet) {
				padding-bottom: 1.5*$space/2;
				padding-top: 1.5*$space/2;
				&:first-child {
					padding-top: 0;
				}
				&:last-child {
					padding-bottom: 0;
				}
			}
			// for frap button
			&-legal {
				padding-bottom: 60px !important;
			}
			&-faq,
			&-help {
				padding-bottom: 150px !important; 
			}
		}
	}
</style>

<section id='content'>
  {#each pageDetail.components as component}
    <div key={component.id}>{renderByComponent(component, pageDetail)}</div>
  {/each}
</section>

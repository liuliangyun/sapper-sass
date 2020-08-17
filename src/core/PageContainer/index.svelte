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

{#each pageDetail.components as component}
  <div key={component.id}>{renderByComponent(component, pageDetail)}</div>
{/each}


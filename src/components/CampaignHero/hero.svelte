<script>
  export let hero;
</script>

<section class='hero relative'>
  {#if hero.url}
    <div class='block relative mobile-hidden'>
      <a href={ hero.url }>
        <img src='{ hero.image_desktop }' alt='' class='img' />
      </a>
    </div>
    <div class='block relative show-mobile tablet-hidden'>
      <a href={ hero.url }>
        <img src='{ hero.image_mobile }' alt='' class='img' />
      </a>
    </div>
  {:else}
    <div class='block relative mobile-hidden'>
      <img src='{ hero.image_desktop }' alt='' class='img' />
    </div>
    <div class='block relative show-mobile tablet-hidden'>
      <img src='{ hero.image_mobile }' alt='' class='img' />
    </div>
  {/if}
  <div class='wrapper'>
    <h2>{ hero.title }</h2>
    <p class='text description' style='padding:0 20px'>    
      {@html hero.article }
    </p>
  </div>
</section>
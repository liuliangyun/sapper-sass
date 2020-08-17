<script>
  export let hero;
</script>

<style lang="scss">
  @import './scss/main.scss';
  
  .hero {
    margin-top: -24px;
    background: #fff;
    text-align: center;
    a {
      .img {
        height: auto;
        width: 100%;
      }
      &.tablet-hidden {
        min-height: 200px;
      }
      &.mobile-hidden {
        min-height: 300px;
      }
    }
    .wrapper {
      padding: 30px 0;
    }
    .description {
      margin: 0;
      padding: 0 20px;
    }
  }
</style>

<section class='hero relative'>
  {#if hero.url}
    <div class='block relative mobile-hidden'>
      <a href='{ hero.url }'>
        <img src='{ hero.image_desktop }' alt='' class='img' />
      </a>
    </div>
    <div class='block relative show-mobile tablet-hidden'>
      <a href='{ hero.url }'>
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
    <p class='text description'>    
      {@html hero.article }
    </p>
  </div>
</section>
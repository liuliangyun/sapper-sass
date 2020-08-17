<script>
  export let ltoItems;

  import { onMount } from 'svelte';

  onMount(() => {
    function resizeLtoItems() {
      // So that the old style won't effect the re-calc, which is needed when
      // 1. New content such as images are loaded
      // 2. Window resize
      cleanLtoItemsStyle();
      var ltoItems = document.querySelectorAll('.lto-items .item');
      // There are some lot items invisable due to the mobile/desktop styling
      var visibleLtoItems = [];
      for (var i = 0; i < ltoItems.length; i++) {
        if (ltoItems[i].offsetHeight) {
          visibleLtoItems.push(ltoItems[i]);
        }
      }
      if(visibleLtoItems.length === 0) return;
      var itemsPerRow = 1;
      while (visibleLtoItems[itemsPerRow] && visibleLtoItems[itemsPerRow-1]
        && visibleLtoItems[itemsPerRow].offsetTop == visibleLtoItems[itemsPerRow - 1].offsetTop) {
          itemsPerRow++;
        }
      var rows = [];
      // This while transform visibleLtoItems to rows
      while (visibleLtoItems.length) {
        var counter = itemsPerRow;
        var tempArr = [];
        while(counter--) {
          if (visibleLtoItems[0]) {
            tempArr.push(visibleLtoItems.shift());
          }
        }
        rows.push(tempArr);
      }
      // This for walk through every row and assign the height
      for (var i = 0; i < rows.length; i++) {
        // ClientHeight is element height which doesn't count margin
        var heightMax = rows[i][0].clientHeight;
        for (var j = 1; j < rows[i].length; j++) {
          if (rows[i][j].clientHeight > heightMax) heightMax = rows[i][j].clientHeight;
        }
        for (var j = 0; j < rows[i].length; j++) {
          rows[i][j].style.height = heightMax + 'px';
        }
      }
      requestAnimationFrame(resizeLtoItems);
    }
    requestAnimationFrame(resizeLtoItems);

    function cleanLtoItemsStyle() {
      var ltoItems = document.querySelectorAll('.lto-items .item');
      for (var i = 0; i < ltoItems.length; i++) {
        ltoItems[i].style.height = 'auto';
      }
    }
  });
</script>

<style lang="scss">
  @import './scss/main.scss';

  @include breakpoint(mobile) {
    .mobile-block {
      display: block !important;
    }
    .mobile-hidden {
      display: none !important;
    }
  }

  @include breakpoint(tablet) {
    .tablet-block {
      display: block!important;
    }
    .tablet-hidden {
      display: none!important;
    }
  }

  @include breakpoint(desktop) {
    .desktop-block {
      display: block !important;
    }
    .desktop-hidden {
      display: none !important;
    }
  }

  a {
    color: $apron-green;
    &:hover {
      color: shade($apron-green, 10%);
      text-decoration: none;
    }
  }

  h2 {
    color: $black-1;
    font-size: 22px;
    margin: 0 0 18px;
    line-height: 140%;
    font-weight: 400;
  }

  p {
    margin: 0 0 24px; 
  }

  .grid {
    >* {
      position: relative;
    }
    @include breakpoint(mobile) {
      @include grid(2);
    }
    @include breakpoint(only_tablet) {
      @include grid(3);
    }
    @include breakpoint(desktop) {
      @include grid(4);
    }
    &.columns-2 {
      @include breakpoint(mobile) {
        @include grid(1);
      }
      @include breakpoint(tablet) {
        @include grid(2);
      }
    }
    &.columns-3 {
      @include breakpoint(mobile) {
        @include grid(1);
      }
      @include breakpoint(only_tablet) {
        @include grid(2);
      }
      @include breakpoint(desktop) {
        @include grid(3);
      }
    }
    &.columns-4 {
      @include breakpoint(mobile) {
        @include grid(2);
      }
      @include breakpoint(only_tablet) {
        @include grid(4);
      }
    }
    &.columns-5 {
      @include breakpoint(mobile) {
        @include grid(3);
      }
      @include breakpoint(only_tablet) {
        @include grid(4);
      }
      @include breakpoint(desktop) {
        @include grid(5);
      }
    }
    &.padded,
    &.padded-1 {
      margin: -$space/4 0;
      &.columns-2,
      &.columns-3 {
        margin: -$space/4;
      }
      >* {
        padding: $space/4;
      }
      &.margin {
        margin-bottom: $space - $space/4;
      }
    }
    &.padded-2 {
      margin: -$space/2;
      &.columns-2,
      &.columns-3 {
        margin: -$space/2;
      }
      >* {
        padding: $space/2;
      }
      &.margin {
        margin-bottom: $space - $space/2;
      }
    }
    &.padded-3 {
      margin: -$space/1.5;
      &.columns-2,
      &.columns-3 {
        margin: -$space/1.5;
      }
      >* {
        padding: $space/1.5;
      }
      &.margin {
        margin-bottom: $space - $space/1.5;
      }
    }
    &.padded-4 {
      margin: -$space;
      &.columns-2,
      &.columns-3 {
        margin: -$space;
      }
      >* {
        padding: $space;
      }
      &.margin {
        margin-bottom: $space - $space;
      }
    }
    .thumbnail {
      display: block;
    }

    .mixology-grid-item {
      @include breakpoint(desktop) {
        width: 33.33%;

        &:nth-child(4n + 1){
          clear: unset;
        }
      }
    }
  }

  // Wrapping body for centering and max-width
  .wrapper {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: $wrapper;
    @include breakpoint(desktop) {
      padding-left: $space;
      padding-right: $space;
    }
    @include breakpoint(up_to_desktop) {
      padding-left: $space/1.5;
      padding-right: $space/1.5;
    }
    width: 100%;
    &.fluid {
      max-width: 100%;
    }
    &.small {
      max-width: $overlay;
    }
  }

  #lto-items {
    padding-top: 40px;
    text-align: center;
    .columns-3 {
      @include breakpoint(mobile) {
        @include grid(2);
      }
    }
    .item {
      img {
        box-sizing: border-box;
        padding: $space/2;
        width: 100%;
      }
    }
  }
</style>

<section class='lto-items wrapper' id='lto-items'>
  <h2>所有新品</h2>
  <div class='grid columns-3 padded-2'>
    {#each ltoItems as item}
      {#if item.url}
        <div class='item'>
          <a href='{ item.url }'>
            <img src='{ item.image_desktop }' alt='' />
          </a>
          <p>{ item.name }</p>
        </div>
      {:else}
        <div class='item'>
          <img src='{ item.image_desktop }' alt='' />
          <p>{ item.name }</p>
        </div>
      {/if}
    {/each}
  </div>
</section>
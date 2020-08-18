<script>
  export let featuredItems = content.featuredItems;

  import { onMount } from 'svelte';

  onMount(() => {
    var collapsibles = document.querySelectorAll('.featured-collapsible');
    for (var i = 0; i < collapsibles.length; i++) {
      var collapsible = collapsibles[i];
      collapsible.addEventListener('click', function(event) {
        if (!this.classList.contains('featured-collapsible')) {
          return;
        }
        this.classList.toggle('collapsed');
        this.classList.toggle('expanded');
      });
    }
    function countLines(index) {
      var dom = collapsibles[index].querySelector('.body p');
      var divHeight = dom.offsetHeight;
      var lineHeight = 25;
      var lineCount = Math.round(divHeight / lineHeight);
      return lineCount;
    }
    // If a text has only two lines, remove the toggle icon
    function toggleCollapsible() {
      for (var i = 0; i < collapsibles.length; i++) {
        var collapsible = collapsibles[i];
        var classList = collapsible.classList;
        var lineCount = countLines(i);
        if(lineCount > 2) {
          if(!classList.contains('featured-collapsible')) {
            classList.add('featured-collapsible');
          }
        } else {
          classList.remove('featured-collapsible');
        }
      }
    }
    toggleCollapsible();
    window.addEventListener('resize', toggleCollapsible);
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

  .block {
    display: block;
  }

  .relative {
    position: relative;
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

  #featured-items {
    background: #fff;
    text-align: center;
    padding-bottom: 20px;
    .item {
      a {
        margin-bottom: 30px;
        .img {
          height: auto;
          width: calc(100% - 40px);
          display: inline-block;
        }
      }
      .tablet-hidden {
        a {
          .img {
            width: 100%;
          }
        }
      }
      &>div {
        padding: 20px 0;
      }
    }
    .featured-collapsible {
      cursor: pointer;
      .icon {
        background: url(https://www-static.chinacdn.stg.starbucks.com.cn/assets/icons/icon-chevron-down.svg) no-repeat center center;
        content: '';
        float: right;
        height: $space;
        width: $space;
        position: relative;
        right: calc(50% - 12px);
        transition: transform 0.3s ease-in-out;
      }
      .body {
        position: relative;
        transition: max-height 0.4s ease-in-out;
        &:after {
          background: linear-gradient(rgba(255, 255, 255, 0) $space, #FFF);
          content: '';
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          transition-duration: $ease;
          transition-property: opacity;
          width: 100%;
        }
      }

      &.collapsed {
        .body {
          max-height: 48px;
          overflow: hidden;
        }
        .body:after {
          opacity: 1;
        }
      }
      &.expanded {
        .icon {
          transform: rotate(180deg);
        }
        .body {
          max-height: 1048px;
        }
        .body:after {
          opacity: 0;
        }
      }
    }
  }
</style>

<section class='featured-items' id='featured-items'>
  {#each featuredItems as item}
    <div class='item'>
      <div class='mobile-hidden'>
        <a href='{ item.url }' class='block relative'>
          <img src='{ item.image_desktop }' alt='' class='img' />
        </a>
        {#if item.title && item.article}
          <div class='description text wrapper'>
            <h2>{ item.title }</h2>
            <p>{@html item.article }</p>
          </div>
        {/if}
      </div>
      <div class='show-mobile tablet-hidden'>
        <a href='{ item.url }' class='block relative'>
          <img src='{ item.image_mobile }' alt='' class='img' />
        </a>
        {#if item.title && item.article}
          <div class='description text wrapper featured-collapsible collapsed'>
            <h2>{ item.title }</h2>
            <div class='body'>
              <p>{@html item.article }</p>
            </div>
            <span class='icon'></span>
          </div>
        {/if}
      </div>
    </div>
  {/each}
</section>
<template>
  <div class="slider" :class="{ 'close': !isOpen }">
    <div class="scroll-wrapper" :style="{ height: innerHeight + 'px' }" ref="scrollWrapper">
      <div class="slider-toggle" @click="switchPanel">
        <i class="icon iconfont icon-left"></i>
      </div>
      <ul class="menubar">
        <li class="menubar-list close"  :class="item.addClass"  v-for="(item, index) in list" :key="index" @click.stop="openPanel(item)">
          
          <a href="javascript:;">
            <i class="icon iconfont" :class="item.icon"></i>
            {{ item.main }}
            <span class="icon iconfont icon-top arrow"></span>
          </a>
          <ul v-if="item.children.length" class="sub">
            <li v-for="(childItem, i) in item.children" :key="i">
              <router-link :to="'/'+childItem.router">
                {{ childItem.main }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Json from '@/assets/json/slider.json'
export default {
  name: 'Slider',
  data(){
    return {
      list: [],
      innerHeight: 0,
      isOpen: true
    }
  },
  created(){
    this.list = Json
    this.innerHeight = window.innerHeight - 60
    console.log(this.innerHeight)
  },
  mounted(){
    
    this.$refs.scrollWrapper.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      console.log(1212)
    },
    openPanel(data){
      if(data.children.length){
        if(!data.addClass){
           this.$set(data, 'addClass', 'open')
        }else {
          this.$set(data, 'addClass', '')
        }
       
      }else {
        this.$router.push('/'+ data.router)
      }
    },
    switchPanel(){
     this.isOpen = !this.isOpen
     this.list.forEach(element => {
       this.$set(element, 'addClass', '')
     }); 
    }
  }
}
</script>
<style scoped lang="scss">
  .slider {
    position: relative;
    flex: 0 0 auto;
    width: 215px;
    height: 100%;
    overflow: hidden;
    transition: width .28s;
    &.close {
      width: 54px;
    }
    .slider-toggle {
      position: absolute;
      top: 12px;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      float: right;
      width: 23px;
      height: 25px;
      // margin-top: 12px;
      cursor: pointer;
      background: #e9ebec url(./images/body-bg.png);
      border-radius: 15px 0 0 15px;
      i {
        font-size: 20px;
      }
    }
    &.close {
      .slider-toggle {
        i.icon-left {
          transform: rotate(180deg);
        }
      }
    }
    .scroll-wrapper {
      overflow: auto;
      .menubar {
        margin-top: 50px;
        li {
          line-height: 30px;
          background: rgb(82, 172, 183);
          &.menubar-list:hover {
            background: rgb(91, 189, 202);
          }
          .icon {
            // margin-right: 10px;
            padding: 20px;
          }
          a {
            // display: flex;
            // justify-content: space-around;
            display: block;
            height: 52px;
            padding: 0 15px 0 0;
            overflow: hidden;
            font-size: 14px;
            font-weight: 400;
            line-height: 52px;
            color: #fff;
            span.icon {
              float: right;
              padding: 0;
            }
          }
          &.close {
            .sub {
              display: none;

              li {
                border-bottom: 1px solid #3393a2;
                a {
                  padding: 0 10px 0 40px;
                }
              }
            }
            &.open {
              .sub {
                display: block;
              }
              a {
                span.arrow {
                  transform: rotate(180deg);
                }
              }
            }
          }
        }
      }
    }
  }

</style>
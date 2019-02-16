import Vue from 'vue'
import Router from 'vue-router'
import homeCompontent from '../pages/home'
import memberCompontent from '../pages/member'
import shopcarCompontent from '../pages/shopcar'
import searchCompontent from '../pages/search'
import newsListCompontent from '../pages/newslist'
import newsInfoCompontent from '../pages/newsInfo'
import photoListCompontent from '../pages/photolist'
import photoesInfoCompontent from '../pages/photoesInfo'
import goodsListCompontent from '../pages/goodslist'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: homeCompontent
        },
        {
            path: '/member',
            component: memberCompontent
        },
        {
            path: '/shopcar',
            component: shopcarCompontent
        },
        {
            path: '/search',
            component: searchCompontent
        }, {
            path: '/home/newsList',
            component: newsListCompontent
        }, {
            path: '/home/newsInfo/:id',
            component: newsInfoCompontent
        }, {
            path: '/home/photoList',
            component: photoListCompontent
        }, {
            path: '/home/photoesinfo/:id',
            component: photoesInfoCompontent
        }, {
            path: '/home/goodsList',
            component: goodsListCompontent
        }

    ],
    linkActiveClass: 'mui-active'
})
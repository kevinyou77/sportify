import Overview from './components/Overview.vue'
import History from './components/History.vue'
import MyCourt from './components/court/MyCourt.vue'
import MyPromo from './components/promo/MyPromo.vue'
import CourtCreate from './components/court/CourtCreate.vue'
import CourtEdit from './components/court/CourtEdit.vue'
import CourtDetail from './components/court/CourtDetail.vue'
import PromoCreate from './components/promo/PromoCreate.vue'
import PromoEdit from './components/promo/PromoEdit.vue'
import PromoDetail from './components/promo/PromoDetail.vue'
import Schedule from './components/court/Schedule.vue'

export const routes = [{
        path: '',
        component: Overview
    },
    {
        path: '/history',
        component: History
    },
    {
        path: '/court',
        component: MyCourt,
    },
    {
        path: '/court/create',
        component: CourtCreate,
    },
    {
        path: '/court/:id',
        component: CourtDetail,
        name: 'courtDetail'
    },
    {
        path: '/court/:id/edit',
        component: CourtEdit,
        name: 'courtEdit'
    },
    {
        path: '/schedule',
        component: Schedule,
        name: 'schedule'
    },
    {
        path: '/promo',
        component: MyPromo
    },
    {
        path: '/promo/create',
        component: PromoCreate,
        name: 'promoCreate'
    },
    {
        path: '/promo/:id',
        component: PromoDetail,
        name: 'promoDetail'
    },
    {
        path: '/promo/:id/edit',
        component: PromoEdit,
        name: 'promoEdit'
    },
]
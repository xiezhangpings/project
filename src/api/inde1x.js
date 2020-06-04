
import ajax from './ajax'
import mockAjax from './mockAjax'
// mock的相关的接口
export const reqBanners = () => mockAjax.get('/goods')
export const reqNavList = () =>ajax.get('http://localhost:5632/navList')
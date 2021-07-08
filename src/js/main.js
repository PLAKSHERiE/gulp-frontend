import '../../node_modules/focus-visible/dist/focus-visible'
import lazyImages from './modules/lazyImages'
import documentReady from './helpers/documentReady'

documentReady(() => {
  lazyImages();
});

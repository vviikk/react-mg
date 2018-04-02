import Button from './Button'
import Banner from './Banner'
import { injectGlobal } from 'styled-components'
import variables from './utils/variables.js'

injectGlobal`
  body{margin:0}aside,details,main,summary{display:block}template{display:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],/* 1 */
  input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}
// Just putting this separately for readibility
*, *::after, *::before {
  box-sizing: border-box;
}

.measure {
  max-width: ${ variables.measureWidth };
  margin: 0 auto;
}
`

injectGlobal`
  
`

// export Button and Banner as named exports
export { Button, Banner }

export { H1, H2, H3, H4, H5, H6, A } from './typography'

// alternative, more concise syntax for named exports
// export { default as Button } from './Button'

// you can optionally also set a default export for your module
// export default { Button, Banner, normalizeThis }

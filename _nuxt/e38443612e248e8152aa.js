(window.webpackJsonp=window.webpackJsonp||[]).push([[69,52,53],{414:function(t,e,r){"use strict";r.r(e);var l=r(418),d=r(419),n=r(391),o={head:function(){return this.$store.commit("SET_HERO",{title:"routes.trade.hero.title",subtitle:"routes.trade.hero.subtitle"}),{title:this.$t("routes.trade.title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","trade"),this.$store.commit("RESTORE_HERO"),{i18nPrefix:"routes.trade.",TradeArrayType:n.a,tab:1,fairTradeArray:n.b,simpleTradeArray:n.d}},components:{SimpleTrade:l.a,Trade:d.a}},f=r(13),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-tabs",{attrs:{type:"is-toggle",expanded:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("b-tab-item",{attrs:{label:t.$t(t.i18nPrefix+"tab.trade_2_1.title")}},[r("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"tab.trade_2_1.title")))]),r("p",[t._v(t._s(t.$t(t.i18nPrefix+"tab.trade_2_1.message")))]),r("trade",{attrs:{"trade-input":{age:!0,value:t.simpleTradeArray,type:t.TradeArrayType.SIMPLE}}}),r("simple-trade",{attrs:{"trade-array":t.simpleTradeArray}})],1),r("b-tab-item",{attrs:{label:t.$t(t.i18nPrefix+"tab.fair_trade.title")}},[r("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"tab.fair_trade.title")))]),r("p",[t._v(t._s(t.$t(t.i18nPrefix+"tab.fair_trade.message")))]),r("trade",{attrs:{"trade-input":{age:!0,value:t.fairTradeArray,type:t.TradeArrayType.FAIR}}}),r("simple-trade",{attrs:{"trade-array":t.fairTradeArray}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},594:function(t,e,r){"use strict";r.r(e);var l=r(414).default,d=r(13),component=Object(d.a)(l,void 0,void 0,!1,null,null,null);e.default=component.exports},840:function(t,e,r){"use strict";r.r(e);var l=r(594).default,d=r(13),component=Object(d.a)(l,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);
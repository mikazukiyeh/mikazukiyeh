export interface factory {
    name: string;
    IframeUrl: string;
  }

export const factories: factory[] = [

    { name: '新北市', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E6%96%B0%E5%8C%97%E5%B8%82)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E6%96%B0%E5%8C%97%E5%B8%82))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '桃園市', IframeUrl:'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E6%A1%83%E5%9C%92%E5%B8%82)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E6%A1%83%E5%9C%92%E5%B8%82))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '基隆市', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%9F%BA%E9%9A%86%E5%B8%82)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%9F%BA%E9%9A%86%E5%B8%82))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '宜蘭縣', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%AE%9C%E8%98%AD%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%AE%9C%E8%98%AD%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '新竹市', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E6%96%B0%E7%AB%B9%E5%B8%82)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E6%96%B0%E7%AB%B9%E5%B8%82))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '新竹縣', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E6%96%B0%E7%AB%B9%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E6%96%B0%E7%AB%B9%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '苗栗縣', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E8%8B%97%E6%A0%97%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E8%8B%97%E6%A0%97%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '臺中市', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%8F%B0%E4%B8%AD%E5%B8%82)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%8F%B0%E4%B8%AD%E5%B8%82))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '雲林縣', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E9%9B%B2%E6%9E%97%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E9%9B%B2%E6%9E%97%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '彰化縣', IframeUrl:'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%BD%B0%E5%8C%96%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%BD%B0%E5%8C%96%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '嘉義縣', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%98%89%E7%BE%A9%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%98%89%E7%BE%A9%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '嘉義市', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%98%89%E7%BE%A9%E5%B8%82)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%98%89%E7%BE%A9%E5%B8%82))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true'},

    { name: '臺南市', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%8F%B0%E5%8D%97%E5%B8%82)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%8F%B0%E5%8D%97%E5%B8%82))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '高雄市', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E9%AB%98%E9%9B%84%E5%B8%82)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E9%AB%98%E9%9B%84%E5%B8%82))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '屏東縣', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%B1%8F%E6%9D%B1%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%B1%8F%E6%9D%B1%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '臺東縣', IframeUrl:'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E5%8F%B0%E6%9D%B1%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E5%8F%B0%E6%9D%B1%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '花蓮縣', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E8%8A%B1%E8%93%AE%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E8%8A%B1%E8%93%AE%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

    { name: '澎湖縣', IframeUrl: 'http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/3f94dda0-2c5f-11ee-afac-f7bcffaa2a37?embed=true&_g=(filters%3A!((\'%24state\'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3Aeda873b4-cce8-4f6c-8592-525e0b620909%2Ckey%3A%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%2Cnegate%3A!f%2Cparams%3A(query%3A%E6%BE%8E%E6%B9%96%E7%B8%A3)%2Ctype%3Aphrase)%2Cquery%3A(match_phrase%3A(%E6%89%80%E5%B1%AC%E7%92%B0%E4%BF%9D%E5%B1%80.keyword%3A%E6%BE%8E%E6%B9%96%E7%B8%A3))))%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true' },

  ];
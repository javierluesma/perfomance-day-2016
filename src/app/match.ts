
export class matchchannels {
    "id":string;
    "name":string;
    "image":string
}

export class Match {
    id: string;
    name: string;
    local: string;
    visitor: string;
    team1: string;
    team2: string;
    
    "competition_name":string;
    "local_abbr":string;
    "visitor_abbr":string;
    "local_shield":string;
    "visitor_shield":string,
    "date":string;
    "hour":string;
    "minute":string;
    "result":string;
    "live_minute":string;
    "status":number  ;
    "winner":string;
    "channels":matchchannels

/*
    "competition_name":"Primera Divisi\u00f3n";
    "local_abbr":"GRA";
    "visitor_abbr":"LEG";
    "local_shield":"http:\/\/thumb.resfu.com\/img_data\/escudos\/medium\/4235.jpg?size=60x&ext=png&lossy=1&1";
    "visitor_shield":"http:\/\/thumb.resfu.com\/img_data\/escudos\/medium\/1535.jpg?size=60x&ext=png&lossy=1&1",
    "date":"2016\/10\/01";
    "hour":"13";
    "minute":"00";
    "result":"0-1";
    "live_minute":"";
    "status":1;
    "winner":"710098";
    "channels":[{"id":"185","name":"beIN LaLiga","image":"http:\/\/thumb.resfu.com\/media\/televisiones\/185.png?size=50x"
    */
}


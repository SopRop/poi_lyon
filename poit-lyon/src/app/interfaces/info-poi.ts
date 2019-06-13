import {
    IPoiInfo,
    IResult,
    IProperties
} from './info-poi.i';

export class CPoiInfo implements IPoiInfo {
    result: CResults[] = [];
}

export class CResults implements IResult {
    properties: CProperties;
}

export class CProperties implements IProperties {
    nom = '';
}

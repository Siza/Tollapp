<script setup lang="ts">
//import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

// const schema = object({
//   email: string().email('Invalid email').required('Required'),
//   password: string()
//     .min(8, 'Must be at least 8 characters')
//     .required('Required')
// })

//type Schema = InferType<typeof schema>

// async function onSubmit(event: FormSubmitEvent<Schema>) {
//   // Do something with event.data
//   console.log(event.data)
// }


const data = ref({})
const loading = ref(false)
const selectedDep = ref()
const selectedArr = ref()
// data.value = {
//     "status": "OK",
//     "summary": {
//         "route": [
//             {
//                 "location": {
//                     "lat": 48.5959,
//                     "lng": 2.58024
//                 },
//                 "address": "Savigny-le-Temple, Île-de-France, France"
//             },
//             {
//                 "location": {
//                     "lat": 48.58504,
//                     "lng": 7.73642
//                 },
//                 "address": "67000, Strasbourg, Grand Est, France"
//             }
//         ],
//         "countries": [
//             "FRA"
//         ],
//         "currency": "EUR",
//         "vehicleType": "2AxlesAuto",
//         "vehicleDescription": "Car, SUV",
//         "fuelPrice": {
//             "value": 1.74,
//             "currency": "EUR",
//             "units": "EUR/liter",
//             "fuelUnit": "liter"
//         },
//         "fuelEfficiency": {
//             "city": 10.1,
//             "hwy": 7.9,
//             "units": "L/100km",
//             "fuelUnit": "liter"
//         },
//         "units": {
//             "currencyUnit": "EUR",
//             "fuelEfficiencyUnit": "L/100km",
//             "fuelUnit": "liter"
//         },
//         "departure_time": "2024-11-29T11:23:40.272036436Z",
//         "departureTime": "2024-11-29T11:23:40.272036436Z",
//         "share": {
//             "name": "savigny-le-temple, île-de-france, france-67000, strasbourg, grand est, france",
//             "prefix": "savigny-le-temple%2C+%C3%AEle-de-france%2C+france-67000%2C+strasbourg%2C+grand+est%2C+france",
//             "uuid": "b94e6821-6b3c-46fb-ad81-ac3e1b890375",
//             "timestamp": "2024-11-29T11:23:40.2720478Z",
//             "client": "api"
//         },
//         "source": "HERE"
//     },
//     "routes": [
//         {
//             "summary": {
//                 "hasTolls": true,
//                 "hasExpressTolls": false,
//                 "diffs": {
//                     "cheapest": 30.49,
//                     "fastest": 0
//                 },
//                 "url": "https://www.google.com/maps/?saddr=48.595900,2.580240&daddr=48.852130,2.862770+to:48.859440,2.847240+to:48.585040,7.736426+to:48.585040,7.736420&via=1,2,3",
//                 "distance": {
//                     "text": "308 mi",
//                     "metric": "496 km",
//                     "value": 496240
//                 },
//                 "duration": {
//                     "text": "4 h 33 min",
//                     "value": 16388
//                 },
//                 "name": "A4"
//             },
//             "costs": {
//                 "tagAndCash": 43.1,
//                 "fuel": 68.49,
//                 "tag": 43.1,
//                 "cash": 43.1,
//                 "licensePlate": null,
//                 "prepaidCard": 43.1,
//                 "maximumTollCost": 43.1,
//                 "minimumTollCost": 43.1
//             },
//             "tolls": [
//                 {
//                     "type": "ticketSystem1",
//                     "tagCost": 1.8,
//                     "tagPriCost": 1.8,
//                     "tagSecCost": null,
//                     "cashCost": 1.8,
//                     "licensePlateCost": null,
//                     "prepaidCardCost": 1.8,
//                     "currency": "EUR",
//                     "tax": {
//                         "isTaxIncluded": true,
//                         "taxValue": 0.3,
//                         "taxPercent": 20,
//                         "taxName": "VAT"
//                     },
//                     "tagPrimaryNames": [
//                         "liber-t"
//                     ],
//                     "prepaidCardNames": [],
//                     "tagPrimary": [
//                         "liber-t"
//                     ],
//                     "start": {
//                         "id": 330082001,
//                         "lat": 48.589131,
//                         "lng": 2.656889,
//                         "name": "Péage des Éprunes",
//                         "road": "A5",
//                         "state": "Île-de-France",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 6979.06,
//                             "time": "2024-11-29T11:31:50Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T11:31:50Z",
//                         "timestamp_localized": "2024-11-29T12:31:50+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     2.656889,
//                                     48.589131
//                                 ]
//                             }
//                         }
//                     },
//                     "end": {
//                         "id": 330081800,
//                         "lat": 48.588521,
//                         "lng": 2.725356,
//                         "name": "15 Saint-Germain-Laxis",
//                         "road": "A5",
//                         "state": "Île-de-France",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 12717.64,
//                             "time": "2024-11-29T11:35:16Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T11:35:16Z",
//                         "timestamp_localized": "2024-11-29T12:35:16+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     2.725356,
//                                     48.588521
//                                 ]
//                             }
//                         }
//                     },
//                     "discountCarDetails": null,
//                     "discountCarType": null,
//                     "height": null
//                 },
//                 {
//                     "type": "ticketSystem1",
//                     "tagCost": 26.3,
//                     "tagPriCost": 26.3,
//                     "tagSecCost": null,
//                     "cashCost": 26.3,
//                     "licensePlateCost": null,
//                     "prepaidCardCost": 26.3,
//                     "currency": "EUR",
//                     "tax": {
//                         "isTaxIncluded": true,
//                         "taxValue": 4.38,
//                         "taxPercent": 20,
//                         "taxName": "VAT"
//                     },
//                     "tagPrimaryNames": [
//                         "liber-t"
//                     ],
//                     "prepaidCardNames": [],
//                     "tagPrimary": [
//                         "liber-t"
//                     ],
//                     "start": {
//                         "id": 330060400,
//                         "lat": 49.010423,
//                         "lng": 3.145543,
//                         "name": "Péage de Montreuil-aux-Lions",
//                         "road": "A4",
//                         "state": "Île-de-France",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 75902,
//                             "time": "2024-11-29T12:19:55Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T12:19:55Z",
//                         "timestamp_localized": "2024-11-29T13:19:55+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     3.145543,
//                                     49.010423
//                                 ]
//                             }
//                         }
//                     },
//                     "end": {
//                         "id": 330063400,
//                         "lat": 49.198461,
//                         "lng": 5.924238,
//                         "name": "Péage de Beaumont",
//                         "road": "A4",
//                         "state": "Lorraine",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 305852.24,
//                             "time": "2024-11-29T14:20:02Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T14:20:02Z",
//                         "timestamp_localized": "2024-11-29T15:20:02+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     5.924238,
//                                     49.198461
//                                 ]
//                             }
//                         }
//                     },
//                     "discountCarDetails": null,
//                     "discountCarType": null,
//                     "height": null
//                 },
//                 {
//                     "id": 330063800,
//                     "lat": 49.136033,
//                     "lng": 6.701621,
//                     "name": "Saint-Avold N°39",
//                     "road": "A4",
//                     "state": "Lorraine",
//                     "country": "France",
//                     "type": "barrier",
//                     "tagCost": 4.8,
//                     "tagPriCost": 4.8,
//                     "tagSecCost": null,
//                     "cashCost": 4.8,
//                     "licensePlateCost": null,
//                     "prepaidCardCost": 4.8,
//                     "currency": "EUR",
//                     "tax": {
//                         "isTaxIncluded": true,
//                         "taxValue": 0.8,
//                         "taxPercent": 20,
//                         "taxName": "VAT"
//                     },
//                     "tagPrimaryNames": [
//                         "liber-t"
//                     ],
//                     "prepaidCardNames": [],
//                     "tagPrimary": [
//                         "liber-t"
//                     ],
//                     "arrival": {
//                         "distance": 372293.85,
//                         "time": "2024-11-29T14:54:59Z"
//                     },
//                     "timestamp_formatted": "2024-11-29T14:54:59Z",
//                     "timestamp_localized": "2024-11-29T15:54:59+01:00",
//                     "discountCarDetails": null,
//                     "discountCarType": null,
//                     "point": {
//                         "type": "Feature",
//                         "geometry": {
//                             "type": "Point",
//                             "coordinates": [
//                                 6.701621,
//                                 49.136033
//                             ]
//                         }
//                     },
//                     "height": null
//                 },
//                 {
//                     "type": "ticketSystem1",
//                     "tagCost": 10.2,
//                     "tagPriCost": 10.2,
//                     "tagSecCost": null,
//                     "cashCost": 10.2,
//                     "licensePlateCost": null,
//                     "prepaidCardCost": 10.2,
//                     "currency": "EUR",
//                     "tax": {
//                         "isTaxIncluded": true,
//                         "taxValue": 1.7,
//                         "taxPercent": 20,
//                         "taxName": "VAT"
//                     },
//                     "tagPrimaryNames": [
//                         "liber-t"
//                     ],
//                     "prepaidCardNames": [],
//                     "tagPrimary": [
//                         "liber-t"
//                     ],
//                     "start": {
//                         "id": 330064000,
//                         "lat": 49.075871,
//                         "lng": 6.896858,
//                         "name": "Loupershouse",
//                         "road": "A-4",
//                         "state": "Lorraine",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 390552.04,
//                             "time": "2024-11-29T15:04:51Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T15:04:51Z",
//                         "timestamp_localized": "2024-11-29T16:04:51+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     6.896858,
//                                     49.075871
//                                 ]
//                             }
//                         }
//                     },
//                     "end": {
//                         "id": 330065200,
//                         "lat": 48.769302,
//                         "lng": 7.602036,
//                         "name": "Schwindratzheim",
//                         "road": "A-4",
//                         "state": "Alsace",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 466745.3,
//                             "time": "2024-11-29T15:44:53Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T15:44:53Z",
//                         "timestamp_localized": "2024-11-29T16:44:53+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     7.602036,
//                                     48.769302
//                                 ]
//                             }
//                         }
//                     },
//                     "discountCarDetails": null,
//                     "discountCarType": null,
//                     "height": null
//                 }
//             ],
//             "polyline": "kkrgHo}vNW?g@gBOi@Qk@w@aClB}@v@Y^GPCN?l@BV@LGP]b@eBs@q@IMGKI]EUGi@G_@Ee@E_@WyBQuAGa@g@yDWy@cAcC]w@BI@K?MCKEEICG?GDg@kAu@mBYq@ISKQOUFI@M?MAMEIGEGAG?EBUm@oAyC_@aASe@Ug@Yq@OUQQQKM?WAAQGKKC@KBcBBsBB[@wDFcJ@kCA_AQ{BB_A@c@Hc@@]@gB@cE?yDAsB?y@?[CUGYIa@G[G_@Cc@?O@SD]Li@L_@b@_Aj@iAHJLFJ@JAJCHMJU@]AYAOGMIMKGMAMBKDGHGPCLAL?N?N@HHTk@hAc@~@M^Mh@E\\AR?NBb@?XAPCLELGJIHKDKDSFYFK@G?ICGEEEEIEOCMCOAS?M?Q@OBOFYH]Ja@p@kCHWJ]HYXy@Z}@HSDMHYF[Jq@`@cAnBwEn@{AvDcJ`AaCN]p@aB`A}B^aA\\aA^cAZaA\\aAXcAVaAVeAVcATcAReARcAPaAN}@NeANiANqALqALsAH_AFw@F}@F_ADs@H{AD_AB}@DcBBuA@wB?uBCsBAy@G}BI_CQwBGsAGy@[oD[kDSsBEa@MsAOwBASKyAEeAE}@Cs@CeAC_AC}@A_C?aC@aCB_AH{D@]@[Bi@JwAP{BPuBTwBHu@Ju@DYPqARoA\\eBVoAXsAVqA|@{CV{@d@{AbCcIh@cBj@kB`AmDd@cBT}@T_AR}@f@_CR_ARcA\\kBXkBRkBJuAHiAH_AFu@Fu@H_AH}@JgAJgALmANwALoANwALgANsANmAJy@Jy@TkBRiBp@iINiBPqBPkBFq@PoBPsB`@yFZkEPeCN{BNyBJaBJmBJqBFsADkADoAFsBFwBDyBDaDB_D@_D?iE?yBAqBEuECyDIwLG{IEkHKkREeHE}DOkREwHMgMA{AAwACuGA{@C}DCyDCcEC_GCkECkHCcFCyFCgFE_KAgDAmD?iA@}CBsCByAHyCH_CHeBH{AN}BJyAHgANgBJkANmARcBLgANkANgAPmALc@DODODQHc@Ls@Hc@Ji@H_@Ja@J]HWHUFQHSHQHOJQPYPUNQRSNMXSRMPKTOLKRSHKFIFKFMDMDSBS@O?OAQCSCMEOGQGKGGIIMIMEOC]Ca@?Y?iA?k@AW?Y@QBUBMBMDOFKFMFMJMLKLIJKNMTWb@KP[l@uAnCKTMTWh@KVQ`@y@nBq@xA]\\WRIFM@Q?MBKHMKKK[]oAyA[c@[c@U[_@i@cAyA]g@m@{@o@}@Ya@SYU[q@aAc@m@W]UWmAwAs@w@i@k@uAwAeAcAcAcA{AwAgAcA{AyAqAmAu@u@k@g@e@c@s@q@s@q@][q@o@iCeCuCoCqAoAcIuHwBsB}FqFs@q@YYKKKKCGEKMM{AyA[YyCuCWWiAcAy@y@_@]c@c@c@a@c@_@GCEAKCUWOOq@o@[YkAiAqBkBkAiAu@s@iBeBwFoFeD}CaA_AyAwAYWkAiAqGgGeAeAo@q@WYUYQWQYYg@[m@Q_@Wk@_@}@a@cAeCgGuDeJu@kBuDeJgCkG{FoNuEeLqB_Fm@{AiAqCaBaEaD}HsAeDwEkL_C}FiAqCqD_JsLwYDIDYEYMQQEOHa@cAeAsCk@yA}@{BcAeCqF}M}@yBi@qA_@_Aa@cAWq@Yo@Uc@OYKQMSMSKOMQQUUYY]mAuASa@{@uAWk@AUCSEMGQKOEEECICGAK?IBSHKBI@K?IAGCECKIGGGIMSKSMYKYKYSm@Qs@I]IYQi@Qg@M]Se@O]O[c@{@]k@]g@W]]c@g@m@QSi@m@eAiAgCgC{AyAu@q@u@s@k@i@u@s@s@o@i@e@m@i@g@e@_@]WU[WqCkC{@u@sCkCcJoIeGoFaA{@qC}BkCuBeAu@oAaAmA{@UQk@_@uA_A}AaAy@g@aBeAgDuBm@]{@g@IEqAq@oBeAa@SaFcCaF{BqB}@eAc@m@WgBq@wCcAgEuAcDaAcD}@u@S_Cm@wBg@eB_@WI[GMA_@Ew@OgDm@{Ew@_Fw@kDi@yLmBmCc@_Eo@aLeB]G}Do@aEm@yMuBaNwBuGgAgAQs@Mo@Oq@OaASiCo@kA[o@Q{@WgA]iAa@iBm@{@[qBy@cBq@gCkAoB_AiDgBoBeAc@e@_Am@cAo@cAq@m@a@SMwBaBk@_@OMm@c@_BqAaAw@}@w@w@q@a@]]MQQmEmEs@w@e@g@eBoBaCoCkBaC_CcDgHcKuMgRgFuHsFgIeDyEOSOSOU{BoC}DaFa@g@sA{AcAiAaDoD]a@}H_IMM}DwDqBiBuHsGcDiCoDqCk@c@[U@K?O?MAKEKIKECGCKBG@IDQEOGi@]IEMKq@c@QMMIGCIA]UGEsA}@aCwAmAs@sBmAqAu@eAm@yAy@oDmByBiAyAs@q@[uBaAgEkByAo@w@[qCeAqBu@wCiAsAa@aBi@SImBk@{Bo@iGaB{Cu@eDu@_Ew@oB_@aDi@}B_@}G}@mFk@{@IkFc@mDUwBQ}F]mCQ{Hg@sF]kF_@iBKcF]qAIiEYaIi@sDWcHc@oE[oBMkFe@c@Eu@IoAOqDg@}AW_BYeDm@_Dq@UEcAWw@S}Aa@cGgBaKcDyIqC_Be@k@M_@Ug@MwA[y@S[Iu@So@McF_A{B_@m@KWE_@C}AY_IsAgB[aDi@mDm@aHmAcDk@qCe@{B_@gLqBqJaB_J}AoGgAcEs@aB[q@MoCa@m@K[EQGKEKEKGKGAKCICEEEGCEAE?E@EBEDCFCHAFYIwB_@oCe@wB]mJ}AqNaCsn@kKew@sM}KkBmJ}A}Ew@eEq@sASkAQo@Ik@EWQUOUECICECCCCCAEAE?C?E@EBCBKDI@QAOCSEI?K@w@QcB[kAS_C_@iF{@aSeD]Gq@KaAOwCe@qAWo@KaAGg@Ek@Es@Ck@CE]EKIIICO?KBEFGLE\\D\\OXQTa@^m@j@WT_@ZmAhA}AnA[XwAhAaCnBuEtDeQlNqOlMwFvEeIxGyFxEwDxCuCbCuOhM_@ZmAfA[X_@^k@j@uA~A}@pASZ{@xAs@rAi@bAaDfGuAtEqBvG_@hAELgCnIgD|Kk@hBg@`B_A~C_@lAyEnOIVSp@GP_@p@MVMVOVOVORMPONQNQLULWJSFWDS@Y?QASCSESGUISKQKSMQMSOQOSQWWQQSSY[o@u@KKMKm@a@g@o@e@o@a@k@e@q@a@k@a@m@uAsB_@k@aA{AcAcBgAkBwAeCsBuDiBqD_AoB{AcDmAqCiAoCsAiDy@wBkAaD}AqEgAkDs@_C_AeDg@cBW}@iAmEQq@_AuD_@}Am@kCKc@Om@GWQ{@WgAYyAq@}CuAkG]}AkBwImD_PsBsIw@yCm@{BcAsDu@iCeAgDiAmDIWg@uAwBcGs@eBaCcGcAaC{@qBcDeHcGaM{@cBgCgFwMaXaBcDyCeGuEkJc@}@g@aAiAyBYk@m@kAYk@}@eBiAsB{@wAuAaC_A_BgAcBqAsB]i@oCiEyA{B_BoCm@aAi@_Ac@w@aAiBq@qA{@cBc@_Aa@}@c@cAe@iAc@eAg@oA[y@Wq@Um@Qe@Uo@Uq@Sm@[aAY}@So@Qk@W{@Uy@YeAe@gBc@eBWeAWiAWiAS_AUiAUkAQ_A]mBWwA[gBqEkYsAoHk@oCm@mCcByGsAsEw@gCaAsCCG}BaG_GsOyA_EuAaEaCuHcAgDYaAU}@o@cCgAqEgA}EgB{Iu@kEKk@i@eDg@mD]eCIq@[gCE]MoAKw@SiBWkCQiBMwAU{C]_Fi@sIScDMaCcAcRI_BK_Bu@sKe@cG_@cE_A_Jq@gFg@}D{@wF_BmJ}@wEuBkKeBkHqAiFiDeMsA}EkDeMuAsFsAuFmAyFcAcF_@mBSeAe@eCw@cEo@gDo@iDqBsKcBaJmAsGmAsGg@kCu@{Ds@}Do@gD]mBCOw@cE_EeTa@sBm@}CmB{Ju@eDOs@}AkGqAuEyAqEm@gBsCoHkAqCgCiFkC}EkCkE_CeDkAaB{BoCgCoCQSmAmAoAmAi@e@gCyBeE_DyIiGwB_BaBqAaByAuBuBkC_DsAeBiCqDsAmByCwDeCoCsAqAq@o@CCMKaAw@gBqAgBoAiKuGuCqByAcAyCcCuBcBUQQO_A{@}BuBiBgB_BkB_BkBuAeBs@_Ac@o@y@iAs@aAg@s@y@kAm@{@e@q@o@_Ay@kA]e@aAsA{@iA{@cAmAqAw@u@c@_@_Au@o@e@m@a@g@]q@a@gBcAw@c@[QmAs@iCyAcAk@oAs@w@c@kBeAeBcAaCwA}@k@w@i@o@c@w@m@wAiAiAcA{BuBkAmAq@u@u@{@eAqAsBqCcA{A{@sAiAmBy@{Am@kA]o@]q@kE_J}CmGwAuCmC}EsBqD{A_CeBoCeDyE{DgF]e@yEgGeCcDuBoCyCeE_B}Bu@iAw@kAs@iAeAiBaAcBm@iAm@iAy@aBg@cA_@u@e@cAa@{@_@w@_@{@c@cAe@gAc@eAg@qAi@wAo@gBcAwC}@oC[aA]iAMa@Og@[gAa@{Ai@qBk@}Bi@uBe@mBs@{C{@wDw@kDw@kD{AsGs@{Cs@{Cc@gBc@eB[kA[kAa@{Ak@qBc@wAg@aBi@cBq@sBs@wBw@}B_AoC_AoCsBcGiAgDgAaD}@iCy@aC_AoCo@kBw@_Ce@wAe@wAg@_Bi@cBm@oBc@wA]kA_@sAYcAYeA[mAWaAe@kBe@kBe@kBs@sCs@uCw@gD}@uDs@{Cs@wCaB{G}CoMcCaKgCuJkAkEkC}IoBiGoAuDsAwDwAyDiAwCaCcGmBuEuCaHeAgCs@aBy@mB_@y@Qc@qA}Ci@mASi@s@kBi@_BYw@Wy@Us@Y_AM_@Sm@Se@Yi@OYMWe@eAWo@c@cA]u@Ym@Yk@Yi@We@Yi@[m@]q@Ue@Sc@y@aBGO[q@gB_EO_@{@iBmAgCw@_Ba@u@eCwEg@{@gBsCCEs@gAcA{A_@g@[c@o@{@{BwC[c@cAmAmAyA}AaBaBgBOOOMiCeCgCwBUScBwAeBoAq@g@sAaAWSg@]a@Y_BgAcBmAaBgAk@_@iCgBkCqBgCkB_A}@}@_AeAoAwAiBiAyA_B_CeAeB_AaB_@u@y@aB{@iBmAwCeB_FY_AUw@k@qB}@iD{A_Hs@kDOs@[{AmAyFyAcHWgAs@uCw@wCa@yAiAsDc@wAiAoDc@wAiAoDc@wAeAgDe@_BqBaHy@_D_@wAa@aBe@oB_@gBWiAWoAScASgAQ{@w@sEUqA]}Bs@qEu@eGc@{DK{@E_@WoCCUOcBIcAKiAC[[wEc@kHOqDIsBO}EGiDCoAGkEAgB@qI@gBBuBB{CFwFBmABgAB{@By@Bu@DmADmALuC@QBi@TeFR_FVkGRaFVmHLiEJoEHuEDgDDqD@_E?sD?_C?wAAeBEwDE{CIuDGoCKmDMoDOiDSuDUiEUwDY}D]aEWqCSsBYoC[sCWqBQ{AYwBc@yCe@}Ce@sCu@wE]oBa@}B_AwEcAcFw@yD{AgHk@uCeB}HIa@w@aEYaBq@eEm@eEScBe@kEQcBQeBMeB]mEWqE[{HKsEMaIGeIWsTQyKWyLUiIo@kS]kIGmAQqDMiCYeG_@yG_@mGi@oIk@sHWmDWiDS{B_@sEgAaMy@iIw@kHYeCq@_Fi@{DeAcHe@gCy@oESaAiAoFaB{G{BgI{BoHaBwEe@mAu@qBYo@Qe@yAoDy@mBMWyA_D{BoEo@kAkAwB_BqCgAcBuAyBiC{DuAuBcCqDy@iAoBmCaDqEwByCgGsI{HwKwBwCgFqH_FsHoCqEw@sAg@}@e@{@u@wAaAmB_AoBq@wAi@kAe@gAe@iAi@sAm@{AcAiCe@uAyAcEcBgFiA{Ds@oCSw@eBkH{AgHoAqGqAgImAeJm@oFu@iIc@mF_@wFWwEW_GYqJMsHCeDCmFCsDAqK@{F?}B?mA?c`@CwIGcFIcF[yJUeGCc@Q{CAIMoBUoD_@yEu@oIi@{EMcAOgACQ{@wG_@cCeAcHw@kE{@iEg@cCSaA_AaE_@wAc@eBeByGmBsGY}@k@gBg@}A]eAmAoDcAsCy@{B[{@i@wAc@kAa@eAWq@Uk@Ys@Yu@[y@Wo@Si@c@gAoB_FyBuF_EcKoBcFqBgFcCsGs@mBiA}C}@eCkBoFy@aC}@oCoA}DiAuD{@uCs@aCo@yBoBkHYgAsAmFo@eCo@gCu@wCe@mBeAgEy@_Dy@eD}@mDeA}Du@oCy@yC_AaDo@wBcAeD_@mAi@eBw@gCwAoEeBqFa@qAy@gC}@qC{@oC_BcFc@wAk@kBg@cBm@uBq@aCq@cCi@mBc@_Bm@_CmA_Fm@eCSy@cAkEu@eDy@yDc@uBYuA]eBa@uBUmAY}AY{AY}AYcB_@yBeAmGMw@]{Bg@gDc@aDc@_D]gC]kC_@{Cg@mEW}Bc@_ESuBQiBMqAUcC[kDQuB_@{Eq@eJ}@gMU}Ca@sFa@kFYeD_@eESsB]aDe@eES_BS_BUeBOeAWcBW_B]sBYaB]mBi@sCg@eCQy@S}@UaAYoAg@uBi@uBi@oBUy@Uy@]iA[eAk@kBq@uBk@eBUo@Qg@Sk@Ws@Yw@uAoDqAeDoCaHy@sBeBoE_DiIaAiCu@sBa@iAa@kAo@kBa@kA]cAWw@Us@Wy@_@mAm@qBg@cBa@wAw@sCa@{A]oAWaAYiAYkA[qA_@_Bc@mB]yAq@{C_@gB[yAWqAScAOu@gAeGoAuHk@qDg@eDIm@s@mFYyBSaB]qCe@}Dc@_EYkC]iD_@eE}@uKQ_CG}@KmAOyBScDU}D_@cHGgAGkASoEOwDGaBIgCMuEIwCG_CGiCGkCGmDE}CEuGGoJAiM@cH@qJDsHDgJ@mC?wCDwGBeGDgKBsF@kC@mC@iD?{B?iC?_FAaEA}AAyACaBA}@C{ACwAEqBGyBGsBKsCGgBEy@GuAGqAGmAIyAKcBIqAK_BK{AIiAIiAIcAKkAIaAKiAMqAKeAI{@MmAOuAOsAQ{AQyAOiASyAMaA[wBYoBq@iEUwA]oBa@}Bg@mCa@qBWmAWoAUcAWkAUcAUaAWgA[qASy@Sw@[mAWaA[gASs@kAaEsAoEcAaDq@oBe@wAWs@uA_E{BsG_EgL_EiLeCgHgA_D_B{Eo@kBsBmGmBeGoAcEu@eCs@eCi@kBi@oBs@mCq@kCs@oCaAaE}@yDi@_Ce@uBgAiFyAoH}@}Eu@_Ew@uEu@sEkA{Hq@{EaAsH}@sHYcCa@sDcAgKaAgLSiCWiDOsBOkCIiAc@aIScEE{@OiDOuDMcDUmHK}DIyDGsDEyCEkDCuCCsCCwDSka@Uwb@CeFEuEE{DCcBCyAC{ACsACqAEeBEgBE}AE{AEyAEsAEuAEoAEcAGsAGwAGsAGsAGkAGkAGkAGgAGeAKcBEq@G}@G_AG}@G_AG}@G{@Gy@Gw@k@gH[iDIaAO}AOaBO_BSoBQcBOwAOsAMgAOmAMcAMcAMaAM_AKw@Kw@M}@OeAMaAOgAQmAQqAOgASoAQcAo@mDCOe@aDO}@QcAOy@QaAQ_AScAUiAWmASaAOs@_@iB_AgES}@qAsFc@kBe@oBq@oCg@oBa@{AwAgFiAaEQo@kAyDe@}AoAeEGQk@aBs@qBsAoDiA_Ds@oBWq@Si@[w@]}@[}@o@}Ag@kAi@mAmAqCc@aAi@kAy@gBs@{Ay@cBu@yAm@kAe@}@a@w@i@cA[k@]o@g@_Aa@s@c@u@_@m@g@{@g@y@g@y@a@o@Wa@sB_Dc@o@]g@i@u@i@u@m@y@q@_AkA_BeAwAkAyA}@gAo@u@y@_A_AeAi@m@k@o@c@e@c@e@_@_@cAcAc@c@m@k@q@o@e@c@q@o@c@a@_@]_@]k@g@a@]_@[m@g@m@g@g@a@{@q@w@m@_Aq@u@i@y@m@k@a@}@m@k@_@{@k@i@]eAo@oAu@u@c@aAi@_Ag@cCmAgGwCeCeAkEeB[Ma@OmG_CkI_DsHsCw@Yi@SmEaBa@Qs@YsBw@iBu@sBy@iBu@o@Wg@UYKoAk@cBu@gCqAcCuAu@c@kAs@eAq@a@Yi@_@qA}@a@Y]W_@YYUWSYU[WSQQOo@i@[Y[YYWm@k@g@e@c@c@q@q@g@g@e@g@e@g@c@e@c@g@c@g@a@e@_@c@Y]_@e@_@e@[a@Y_@W]Y_@[c@[c@W_@Ya@Ya@{@qAa@o@k@}@_@m@]k@[i@_@o@a@s@]m@e@{@e@}@e@}@]q@Yk@]q@[o@Wi@Yo@e@eAi@mAg@kAe@iA[w@a@eA[y@a@gA[{@[}@[}@[}@]eAk@gB[cA[cAYaAYcAYeAWaAWaAWaAU_A[sA[qAYoAUeAWmAWoAWsAWsAWuA[cBWwAUuAUuAW_B]wByAqJsBeNoA_Iy@_FWuAWwASgAUkAYwA[{A]_BYqA[sA]wAYiA[mA]qAYgAMe@g@iBoAsE_AiD{DkNmGeUuBsHaByF{@}Ce@yAk@kB{BcHeA{CUo@Uo@[{@Yu@Um@_AaCs@gBKWq@}AYo@Yo@Ym@Ym@Ym@Wi@[o@]s@[o@[o@[o@Wg@Uc@Uc@S_@{AqC}BgEUa@cAiB{@}Ag@_Aq@sA{AyCa@y@g@eAm@qAo@uAi@kAc@aAs@eBk@uAa@eAa@eAi@wAa@iA_@eAWu@_@iAY}@a@oA_@mAY_Ag@eBi@oBg@kBc@cBg@sBi@}Ba@gBWkAWmAWmAOu@UmAUkAQ_ASiAW}AUuAUyAWaBU_BQoAS{AMaAKw@g@sEi@kFKeAGo@Gs@Ei@i@oHGaAI{AWwEKoBKuBImBG{AEqAE{AGgCGsBIoDEiBE_BGmBGoBEoAGcBGmBI}BMsCIgBI{AKmBIsAK}AIiAG}@C_@Ee@CYEc@Gm@[kDSqB[sCi@oEYyBUcBSwAWcBUwAW{AWyA[cBUmAwAcH_BkHuA_GsAsFyCkMwBwIaByGmC{KsBsIi@}BOo@Oq@Mm@Os@Mm@Os@Mm@eA{FIg@OeAKs@M{@M}@M_AKy@Io@Is@K_AMiAKeAI_AIaAGy@Em@Em@G_AEo@Ew@Ey@E{@Co@Cm@Cw@Cs@C}@CiACuACoBAoAAyAAyA?iB@kB@sA@{@B_BBoAB_AB{@DsAF_BDeAFsAFsAFsAD}@Bk@DaADaAF}AF_BDiADyABaABeABsABuAB{ABaC@wA?a@?cCAsAIeIKwEOkEAYI{AIkBEo@Ey@KkBWeEg@kIMiB_AqOYcFIqAMqBSmCSeCo@_Hg@mFYaC]yCm@cFm@mEm@mEaB}J{@gFu@kEm@_ECM_@gCe@eD{@eHOyAQkBo@mHWgEIoDGgEAgBBeFHiFJcCFyA`@wGFw@@M@MB]VcC~@mHbA{F|@}EdA}F`@yB^qBx@sEF]X{Ah@qCJg@Jc@Je@Je@Li@Lg@Le@Le@J_@La@La@J[L_@Nc@Na@L]Pc@Rg@Pa@LYN[\\s@Zo@Tc@Ve@Xg@Vc@Va@T]v@iANSPUNQj@q@VYVWPQRSp@o@TSRQXU|@s@`@YNK|@i@j@[jAi@t@[^Op@Ud@Mp@Qn@Of@Kl@Kt@Ip@Gl@En@Ex@C^Ab@A|@ApBAj@AjACb@Al@An@Ax@AnACf@AdBC~AA|@E`@A`@A^Af@Cb@Cp@E\\CfDW\\E\\EZE^G^G`@I^Id@K^I\\I`@KXI\\K^M\\M^Md@QZM\\O\\O^QZO`@Sb@U`@U`@U\\S\\S^U`@WZS\\U\\UVQd@_@XUXUXURQXWVUXW^]Z[Z[^_@^a@xAcB\\a@hAyAl@}@T[|BkDl@cAvAkCj@iAp@uAr@_Br@gBf@mAn@gBr@qBTq@XaAXaAr@iCpAcFjAsELe@b@cBhAkEtC_LhFiSrAiFnCqKnA{E|AcGfAeErBeIlBqHjAqEnA{Ex@_Dh@oBV{@d@}AtA{EZ}@tCcIf@yAFOFQtAwD~@sCp@}BJ[v@oCR{@TaAT_A^sBr@oEf@qDJ{@Hs@Fk@Fm@Hw@Fs@Dg@Dk@F{@F}@FgADw@DaADiABo@Bw@BaA@m@@aA?k@?cA?eA?kAAqAAcAEmCCeAC_ACu@E_AEu@Em@Em@Gy@Gw@Gw@Gw@KiAI{@Iw@Is@Iq@Im@Ik@Kq@Mu@Ms@Mq@Oy@Ow@Mq@Ou@Os@Oo@Oo@Ok@Me@Qo@Qm@Sq@Sq@Y_AW{@wDwLY}@So@Qk@Qk@Qm@Oi@Oi@Qo@Me@U}@YmAS{@UcAQy@Os@Ou@Mo@Mq@Km@Km@Ig@Ii@Ii@Ii@Gc@Ik@E[Iq@Is@Iu@Iu@Gk@Gm@Go@Gq@ImAC[Ei@KaBEu@GgACk@Co@Cq@Cy@Cs@CkAA_@Ak@Ao@AaAAmA?gD@kC@oA@m@@g@@g@@c@@c@@_@@]@[@[Bu@DcAD}@Dy@Ds@Ds@PwCPoCTqDVyDbAgObA{Oh@gI^yFj@yIdC{_@hCy`@NwBPeCNuBLaBLuAJeAFm@Hw@Hw@Hu@Fk@Hm@Ho@D[D]Fc@Fe@Fc@Hk@Hi@Hi@Jq@Lw@Ly@PgALs@Ls@Lq@Nw@P}@P{@Ns@Nq@Pw@Pw@Nq@Pu@VeAn@gCjBqHh@sBViAVkAXsAXsAVoAZ}AP}@Nw@Lq@Ls@Ls@Jm@Jm@Jo@Ly@NcALy@NcANeAL}@L_AL_AL_AHo@xAsLjBiOtAaLjAoJNiANiAPqANeANeANeAPkAN_APgAPeAPeARiARiARgAP}@RcATgAPy@Py@R}@R{@TaAVeAR{@T}@T_AT}@XgAZmAVaAVaAXeAV_AxBmIt@oCdBwGh@qBt@sC|@gDt@uC`CaJd@gBh@qBh@qBh@qBn@aCT{@V_AV_AV_AV_AXcATw@b@_BZgARo@Rs@Tu@Tw@Vy@Vy@ZcAX_AX_AX}@Ts@X{@ZaAZ_AVu@Tq@Vu@\\aAXw@\\_Ab@kA^cA`@eAb@iAh@uAf@qAp@aBl@{Ad@iAh@oAb@cA\\w@d@eAl@sAvA}CfA}BvBoExD{HdF}JfIaPhFeKtFwKzHoOx@cBp@uAn@sApD}HtAcDrAeDlBaFDOJYrAwDXy@dAaD~@uCRo@~@}C`@qAzBaIz@aDd@cB`AkDT{@HWFYFQPo@^sAd@aBXaANi@J_@HY^mA^oAZcAHYRq@Nc@Pk@Pg@HY^gA`@iANe@Ri@J[Xw@f@sAb@iAd@mAf@oAnAsCb@gAd@iAh@kAf@gAl@oAh@gAVi@Ta@Tc@Tc@h@cAVc@Tc@p@mAp@kAj@aAr@iAp@gAn@eAr@eAn@aAb@o@NSZc@Zc@\\e@\\e@\\e@X_@Za@TYRWZa@`@g@b@i@b@i@l@s@p@w@`DqDZ]\\_@\\_@^a@b@e@d@g@b@e@zAaBhG}GnGgHb@g@`@e@`@e@\\a@h@o@f@m@d@k@`@g@`@g@^e@\\c@`@i@`@i@^g@d@o@d@o@j@w@n@}@l@{@zEeHdCuD\\g@\\g@\\g@Ze@^k@Va@Zg@Xc@Ze@T]PWV_@Zg@\\i@V_@\\g@fA{AXa@T[`@k@\\e@\\e@X_@X_@X_@Za@^e@^e@V[Z_@Z_@^c@f@k@b@e@^a@\\_@\\]\\_@f@i@Z[^_@v@w@`@_@f@c@d@a@b@a@\\[ZYZYZWZW\\Y|CcCpCuBhFuDvCsBnEcDROTQTQVSVSVSTQVSXUXUXU^[~AuAjBeB`@a@`@a@d@e@f@i@h@k@`@c@nB{B\\a@\\a@X]V[TYX_@Za@Za@\\e@Zc@Xa@Xa@Xa@\\g@Ze@Xc@Xc@\\i@Xc@Zg@^m@^m@\\k@Zk@Zk@Ve@Xi@Zm@Xi@Vg@Vg@Xk@Te@Xm@Zq@Xm@Xo@Vk@Vk@Vm@Xq@Vo@Xq@Tk@Zu@Vo@Tm@Vq@^aA\\}@Xu@^cA^aA\\}@\\_A\\}@Zy@Zy@\\}@j@yA\\{@Vo@Xs@Vo@Zw@Xs@Re@Pa@Vk@Ti@Vk@Tg@Tg@Te@P]Vi@N[N[LWHOHQJSP]NYP]dBaDXg@Zi@Zi@\\k@b@s@b@s@d@u@`@o@d@s@b@o@^i@^i@h@u@d@o@p@{@d@o@p@{@l@s@bAkAr@y@l@s@r@w@LONQ\\]d@e@d@e@d@e@f@g@f@e@l@i@ZYf@c@`@]^[^[^[pB}AZU\\WZU`@YpBuApCeBVO\\S\\SZQ`@U`@SXOXOZO\\QZO^Q\\O`@Q\\O`@Qb@S\\O\\O\\O\\M\\M\\M\\Mb@O^Mb@Od@Od@Of@Ob@M^Kd@M`@Kf@M`@Kb@Kb@Kd@Kf@Kf@Kf@Kb@Id@If@If@In@I^Ef@Gf@Gd@Gf@Gf@G`@Ef@Ed@Ej@El@Er@Et@EnEUt@Cn@Cn@Cl@Cj@Ch@Cf@Cd@Cd@C`@C`@C`@C\\C\\Cf@Ed@Ed@Ep@Gd@E^E`AMhAOj@If@Id@Ih@Kt@On@Mr@Oj@Mn@Ol@Op@Qn@Qh@Of@Od@Ol@Sf@Qn@Up@Ur@Wt@[`Aa@n@Yt@[z@_@`Ac@~DiB|@a@j@Wj@Wj@Wn@Yl@Wp@Yl@Wb@Qb@Qb@Qb@Q`@Ob@Ob@Of@Qh@Qd@Od@Of@Ov@Ur@Sn@Qj@Oj@Oj@Oj@Of@Mj@Ol@Ot@Ql@Ox@St@Q|@Ur@Qr@Qp@Q~@Wx@UtDgAd@Oh@Qp@Up@Wp@WdAc@`Aa@r@[jB{@rCwA`DiBlBiAdDyBfAw@`BoA~@s@jB}AxAoA`CyB^_@hDoDvCgDvDsEr@}@tBkCj@s@`@g@d@m@d@m@d@m@b@k@f@o@l@w@d@m@h@q@f@o@~AsBhDmEzBuCtAgBfAwA`@g@zFoH|EkGf@o@~@mAt@aAt@aAb@m@d@o@PURWZa@Za@X_@Za@X_@\\c@X_@\\c@X_@X_@X_@\\e@\\e@\\e@Zc@^i@l@{@h@y@`@m@\\i@Va@^m@\\k@Xe@Zi@Xg@Xg@Zk@\\o@\\o@\\o@\\q@^u@b@}@b@}@Xm@Xe@`@}@p@}Af@oA\\{@Pc@x@sBz@}BrAwD^iAb@qAn@sBX_AV{@\\oAh@oBd@eBb@gBr@{CViAViATeARaARaAP}@ReAReANy@N{@PcATsAPgAN_ANcANeANiAJs@Js@x@eGlAgJNiAL{@L{@Ly@NaAPgAPeARmARiAToAVwAVsAVwAZcBp@qDzB_MNy@hDeRReAP_ARgATmA^mBHg@DUFWXgBXiBT}APmAPmANgAb@gDLcANoAJ{@NwALoAN}AN_BLwAL_BLeBLoBJgBJiBJsBHaBFuAFyAHqBFcBFcBH}BFcBFcBF{AFyAFuAHcBJoBJwAHiAJkAJeALoAP_BRcBPqANeAL{@NaAJm@Jk@Jk@Lq@Nu@P{@Ns@Ns@R{@Ry@VcAV_AV_AV}@V{@X_ATs@Vw@Pi@jB}F\\gAZcA\\iAZeAXaAV_AXeAT}@R{@TaATeARaAP}@P_APcAPgANaAPmANiAJy@J{@LgANwARqBLyAHgAHmAHsAFkAFwADeADiABy@@e@@e@@m@@w@@}@@cC?gBCuEAeAC_BCeAC}@Cy@C{@Y}IU_HGaBEmAEkAEgAEkAGeBEiBCgACoACoACaBCeBC}BAwB?aC?kB?qB@wA@eA@eABiBBeBBwABkABeAB_ADuADsADmADiABk@DiADeADeADaADcAv@wRFyAFcBDiADkADsADuABcABeAB}AB}A@cA@_A@{@@gA@eB?mB?qB?eCAkBAmAAgAAaACwACyACmAC}@C{@Cu@Cu@Cs@Co@Co@Co@E}@Ey@Ew@Eu@Eu@Eu@GgAEs@G_AIoAGaAG_AG{@Gw@Gy@G{@G_AG{@G{@Em@Ek@i@wH]_FIkAImAG_AIoAG}@Em@IqAGeAGcAGiAGoAGqAGqAG{AEiAEmACw@C}@CaACiACmACoACyAC}ACiBC_CCqF?wGBoHD{DDkCDyBD_BBkADwADoADqADmADeADiAD_AD_A\\{FRmD@SB]VyEB_@Dq@d@mHDo@Do@Do@Fy@HiAFy@PwC~@{ONqDLiDJyCB_ABaABeABsABeBBmBB}BBwCBiEBiFJ_UDmD@s@@o@@m@@i@@k@@i@@e@BeAB_ABy@Bs@Bm@DcAPcEDaAD{@Du@Ds@B_@T}C^uENiBb@qEd@sEh@oEj@oE\\kCHm@XsBh@}Dh@yDd@qDb@oDP{ARyA\\_ENaB^gEZmEXqETyER{EXmIP_FP_FNcFPyEHuBFeBT}EV{EJkB\\{E^wENmBPkBb@{EPkBPmBVsC\\yDNgBb@eF`@}ENoB\\_FJqBLoBT_FPaFN_FJ_FF}EB}E@}EC}EC{EG}EEmBW{HGsBIyBIiBKsBCm@Em@G}@GcAMmBMoBOmBOkBOmBOkBW{CI{@_@uEa@kFKuAOiBKwAASMkBKmBMkBKmBKkBKmBI_BGqAI_BGqAIaBO_DEoACaACk@CuAG{AIqBGcBIwBG_BImBIeCGmBGeBIwBImBImBIgBKwBKiBMqBKyAQ}BQuBOcBQmBSqBSkBSkBSiBSkBSeBUiBSiBScBUqBQcBSmB_@uDWqCM}AQyBOkBMmBKeBMoBKgBMuBKiBMsBMwBK}AIkAK{AW}CKmAKkAKkAKkAMsAKgAMoAMoAOwAMkAOuAOsAQ}Ay@gHOqAMeAMgAK}@MeAOqAMiAMiAMkAMkAMkAMkAMkAKaAKeAI}@IaAIeAIiAG_AGaAGcAGeAGeAGcAEu@Ew@E}@EaAEgAEmAEuAC_ACeACkACuAC}ACsBAkB?yB?mC?uB@qB@mA@qA@}APmRFyFRySN}MX_\\@eB@wB@eE?mC?oC?}BAeCAmBCiCCyBCmBCgBCuACuACgACcACaAC{@Cy@Cq@Cu@Cs@Cu@As@GeAEcAEeAEaACg@I}ACc@YsFGeAGcAGaAG}@G}@E}@Gy@Gw@IeAIcAKoAKmAKkAMuAMqAMoAO{AMmAMiAOsAOsAMgAMgAMcAMaAMaAOiAOgAOgAQoASsASqAo@aESoASmASkAUiASiAUqA_@oB{AuH}@eEqAyFcCcK{CwLiDyM]sAa@}AoEgQoAcFYkAWgAYoAUeAWkAQw@Q}@Mm@Oy@Mq@Oy@Mq@QcAMs@Mu@Mw@OaAMcAOeAOeAOgAKu@Im@Io@_AeIcA_JwAqLgAiIo@sEOcAMw@O}@O{@QcAQeAQcAQcAQcAQaAQaAQ}@Q}@ScAQ}@_@kB[uA]cB]_B_AaEa@aBa@cBMe@U}@_@yAa@{Aa@_Bc@_Bc@_Be@_BiAwDg@cBc@wAW}@s@aCa@sAg@eBwAyEiC{Ic@{Ac@_Bc@cBgBaH]wAI_@YqA_@eB]cB]gB]mB[iB[kBYiBWaB[{BWmBQmA[aCWqBYyBS{AY{BUeBWmBYyBWsBWkBUcBUgBY{BWkB[aCUgBUgB[aC]oC[cC]oCYwBS{AK{@kBuNqCkT_E}ZYwBYuBWiBU_BSsAWaBSoASmAY_BWwAWsAUiA[{AYsAUeA[uAuCuLU_AUaA_@_B_@}AYiAWcAU}@U_AS{@Qu@U}@S_AGWKe@Ie@Om@Mo@Ii@Ki@y@gEIc@G]Km@Ko@Mw@O_AOaAOcAOeAQoAOiAMcAOmAMeAMiAMmAKaAKcAI{@KgAKkAIaAIcAIcAGy@G}@GaAGcAEu@GmAGoAGoAGuAEcAEgACu@Cw@C{@C}@CcACaACqAC{AAyAAqAAaC?qB?yB?iB@aB@qA@gA@cA@u@B{ABuABsABoABmABsABoABmABkABoAB_BBaBBkBB_C@sB?wMAaECuCCsBCwACmACiACaACaAC}@Cw@Cu@Cu@Cs@Cs@Cq@Cq@Ck@Ck@E_AE}@E{@GiAGgAGeAGaAG_AG{@G{@IgAIgAOiBOgBMwAKgAMoAMoAMoAOyAMmAq@wG}C}ZYoCSmB_@yDMoAMoAMkAMmAMmAKeAMmAMmAIw@KcAMmAMmAMoAKcAIy@Iy@I{@I{@YsCGk@Iu@Iw@Iw@Iw@aAmJe@wEYmCYqCe@{E{AeO_AcJ]iDQmBQoBM}AIcAGw@Gu@Gw@Ek@Em@Eo@Eo@Eq@Eq@GcAEu@Ew@Ey@Ey@E}@GsAEeAg@iMCo@G}AIoBIwBGwACg@EgAI_BQ{EImBGqBYeHIoBMwCUkGEiBCiBCsAAyB?_B@mABkA@w@DqBF}ANwCFcARqCPcBB]NoALwAFg@l@_E^yBPcATeADW^mBn@uDXkBRwAFg@XwARgBPaBL_BZsEHcBFeBFqBDkB@cA@s@BeB?w@AcAAqACcD?_AA_ECwEAeE?{AAwB?wACaG?wD@qC@uA@s@@s@@uADaCBiBFeCH}CH{BHeBFoANqCLqBZqEP_CZ{D^yEVmCHeANiBNgBNkBLiBNiBLeBJcBVqEHcBHmBFgBFoBB}@@a@D{ABgABu@D}AFyBDeBD_BFwBBcA@SFiBDgBDgBFgBDgBHmBLoG@]DaA@g@DeBPiHFcBFsBFyBJ{DHqCBy@By@B{@B}@BiADiBDyADwABy@By@BcA@m@@s@@u@@gA@qA@_B@cB?mB?}BC_CCgBEqBE_BEqAEeAE_AGoAIyAIuAIqAIkAGy@IcAIaAKiAKgAKaAK}@K{@Kw@Ky@Ku@M}@U{ASoAgA}GKo@Mw@O_AO}@Mw@Mw@Ii@My@QiAQiASoAUwASmAQiAQiASqAg@_Di@kDm@aEQiAO_AO_AOaAMy@My@M}@Ky@Ky@Is@Iw@Gq@Gu@Ei@Eq@Eu@E{@Co@Cu@C{@Ao@Am@MqNA}@Ay@CmACaACu@Cq@Ci@E{@Ey@Ey@Es@Eq@Eo@Eq@Em@Em@G}@IkAKwAIkAIeAG{@IkAImAG{@G}@G{@Gy@G{@Gy@G{@G{@G}@y@{LG_AEm@G_AIiAG}@G}@G_AG{@G{@G}@G}@G}@IiAIgAIgAIeAKsAIaAIaAKiAKgAMsAMoAKaAK}@MeAOmAQuAQqAOiAQmAM{@QiAOaAO_ASqASqASoASoASqAUwASoAUwAW_BUuA[oBiAeHSmAQgAQgAYgBy@eFQgAa@eCO_A}BuN{AqJQiAOaAO_AMu@Ie@g@_Dg@}Ce@aD_CyNQgAOeAc@eC[{AYoA_@aBWgAk@yB}@{Ce@uAk@}Ac@iAuA_D{@gBs@sAiAoBuA_CaCiEq@uA[q@]w@[u@Yu@e@qAk@eBUu@]oA]sA[sAg@aC_@qBUwAWgBSaBOwAMuAKuAGcAMeCIyBCaAC}AAiB?mA@gCBgBBeAFoBJgCJyBv@iP|@kRJuB\\mHNeD\\_HReETuEJaCBm@DiABaADwB@aBAoCAeACqAEkAEaAKgBMiBOgBQ}AMaAU}AO_AQ}@SaAWkAe@kBc@{ASo@g@yA_@cAe@kAm@uA_@u@a@u@i@_Aw@mAw@kAs@aAcByBaDcE{AuBm@_Ak@}@e@{@g@aAe@aAm@uAg@mA_@gAo@qBW}@]oAWiA]aBW}A]uBMgAK{@Is@Iw@KaAMmBIgBCu@C_AEeCAw@@qCB{BB_ABs@HcBJcBHgAFs@N{AJ}@Jy@L_AN_ALu@ToAPeAN_AVuAPiArAcIhCuNh@_DZgBx@yEhCaO|@uFPeAT_BR_BLcAJaAHw@LoATmCPcCTwDPyEFeCF_D@{A@uB?{DGuECsAE}AM_DKuBIyAOyBUmCa@qEk@uFaC}Ta@eEk@iFSmBWwCKuAIoAGiAMkCCo@CiACiAEuBAgEFwFFuBLiDNcCN}BPoBN{ALiATkBb@uCr@{Dj@mCl@gCjAkEbDqLpAwEpA_F`A}D\\cBx@qEn@aEd@oDT}B\\sD^cGLcCFiBDmC@gAB}A@_B@eB@}D?a@DoI@eB?cC?g@@gABqB@sB@}D@kE@oBBmE?o@B{G?{@?sA@kAB}A?iB?cEAmDAq@CaBIaEEiAIcBKwACs@IcBQcCOkBOaBMgBMeBQoBa@}EMkBKiBKmBCi@EcAEmBEmBAoBAmB@mB@mBDmBDmBFkBFmBHkBHmBHmBFkBDkB@SPcFN}DFqADeADmABcADaAHqBDsAFeBB{@N}DFsBFaBJiCFyALgDHiBDiADsAFcBHwBJ{BJaBJ{ARcBLyAH{@LoAP{Ah@}DZqBXcBXyA`@sBVoA\\{AZ{A^cB|@_Ed@uBBO\\yAVkA\\_B`@iBj@mCf@iCb@cCR{ANkARiBNgBNuBFaBFoBDoBByAAgCCiBO}EKuBM_B]cDWwBIo@WkBY_BWcBSoAIc@O{@WaBWcBScBUeBMcBKeBKgBGgBCmBAyAAqB@iBBoBDkBDmBDiBJgEJkEDmBDgBDoBB_BBgB@uA@qB@uB?eBAeBCiBCcBEaBEsAG_BG{AGuAIyAIqAKaBMaBM{AMyAuA{OMyAMuAMwAMwAMuAMwAKkAI}@I}@KkAKiAKqAKsAKsAIiAKwAIqAI{AI{AGqAGsAGcBEsACeACkACoACoACuAC{ACcBAyAAaBAeB?qB?uA@yE@mG?wA?aBAyAAcBAsAA_BCyACmACkAEuAEoAG_BGyAGuA}@iTEaAGuAGqAEiACaACaAAkAAmA?eA@cA@kABiADmAFsAFkAHkAHkAJqAJkApAmNx@eJJgALqAJiAJgAJoAHeAHkAFcADaADgABgABsA@eA@iA?gAAkAAeACeACcAEcAGgAG{@IiAI_AIy@K}@Ky@Kw@Ku@Ko@Km@Km@Oy@}CePSgAQ_ASgAO}@OaAM}@MaAK}@Iw@I{@I}@G{@G_AEs@Es@E{@Ey@E}@S_FGyAGqAGqAGkAGiAGcAG_AGaAIeAIcAI_AIy@KaAK}@MeAMcAM}@w@{FM}@qAoJQoAOiAMaAMaAKw@K{@K_AMgAOwASsBQqBQsBIcAGw@K}AMoBMoBKgBGmAWqEEy@M}B[aGK_CIeBGwAOsCUyEWiFQqDM}B_@oHKwBU_FImBMmBSyEGkAA]E_AGq@ImBW}EKoBUaFIoBEmAAc@GqAMyGGyBCiBAqECgEAmCCyACgDCcBCoAEuAEiAEeAOiCIgAGy@I{@Gm@Iq@KeAMeAOsAq@oESkASeAQ{@_@cBYeAEQCIc@aBe@aBe@_Bc@yAQg@W{@g@}Ae@{Ac@}Aa@}AMg@Qu@a@kBWwAYeBUeBSgBQgB[uEMkBKkBMiBMkBMiBMiBOiBOiBQgBSgBOsAo@aFWeBs@mEo@kD]qB[cBc@}B]iBY}AWuAWyAQeAO_AQgAU{ASqAg@kDg@yD[eCSiBg@uEQkBa@kEc@{EOkBSiBQiBOgBQgBIy@UyCs@}He@qESgBSgBSgBScBQeBu@{Gg@}E]{D_@aFMiBCe@QaDAMGqBS_FYgHk@cM[wE_@uEQiB_@}C[oCg@_Di@_Da@_Ce@uBg@_CmAsEQq@uA}EaAuCkAgDkAuCsAeDkF_MaD_Ii@sAi@wAg@wAc@yAc@{Ag@cB]wAeAcFu@iDYkB[mBQmAWiBS{AUkBIs@MqAEg@C[Eq@G}@Eo@MoBMyBI{AEy@Cu@EkBCkC?wDBkBByA@k@@g@@QDo@HmANeBPeBh@gEVaBZ_B\\_B^}A`@wAb@yAd@uAf@sAj@sAfA{BRa@p@gAr@gAt@cAlBcCt@aAv@_AdAqAh@u@`@m@`A{Ap@mA~A}Cl@qAj@sAh@uAf@wAd@yA`@{A|@iDVeA|@qDl@eCTcAPw@XmABKDQJc@Lg@^yAf@sB~@kDFUH[f@qB\\uAp@oCT_Ab@cBVcAXkAJe@Ha@@IDQVkAZ_BVaBTaBP{AVaDR}CHkBB_ADsC@mCCsDKyCK_CGs@KwAKaAWiCUeBG_@QaAOu@g@_C_@eBc@aB_@qAkAuD_@gAc@mAs@cBk@sAuAcDk@oAiAeC}CoGsAqCCGy@cBs@wAmAkC_AyBe@gAo@cBe@oAg@wAq@uBUu@Uw@Uy@Qq@YmAWoAu@cE_@aCMiAKcASeCMmBIwAQkDKiCg@sLOcDOqCMkBWqCW}BGg@Ii@Mw@QeAWaBI_@Qw@Qw@GUY_AW{@Y}@Ma@eAsCqAoDk@}Ae@uAY}@{@uCo@sCq@oD[qBUgBU}BKsAK{AMwCEcBC_C?iDBkCLkDHmBHuAHuAJuBLkCFeBFaBDsDA{BAyAEyBMsCGeAMaBOyASuBm@iEWiBo@mEYsBUiBSwBOcCGcAGyAEkBE}B?wA?q@?uABq@FmBHqBHwAJ{APqBVeCL}@ViBXqBb@yC^iCPgATaBNeAR}AZ{Bd@_ETyBR}BNmBLcBHyAHoAN}CFgBFuBHsCB_B?{AAwB?}@?oA?cG?yFAkDEkCAgECuIAuH?aB@eE@aBBeBDuEFuE@W@q@?M@e@Bw@@y@D}AD{ALkEFoBHcBDoADeAPmEHuBDmAHcCDyAFoADqB?k@Bu@@o@@k@?qA?eK?m@AmCQaIOiFWoHOcEIsCKwCI{CC{C@sDJgEHiBHyALgBb@aE^eCZqB^kBh@aC~@mDh@gBlAsDpAoD`AgCnCuG~AyDrAcDlDuIbC}Fd@iAZw@|@{BVq@Tm@Z_APi@\\iA^uANm@R}@VkARgAPgAZqBLaAJ{@N}AL}AHqAH}ADiAD}ABeB@cCAqBCuACcAGeBI}AIiAKuAMoAOwAQsAYmB[aBWoAWkAYiA[kASq@_@iA_@eAa@cA_@_AWk@]s@_@u@_@q@g@{@o@eAyAyBgA_By@kAuAmB{@oAaBaCcA{AeA_Bo@aAg@y@s@iAo@gAo@iAg@aAg@cAi@iAg@gAa@_Aa@aA[w@Ys@Yu@[{@[{@_@iAUs@Y}@Uu@Sq@W}@Qo@Ok@WcAWgAQw@S_AOs@Ou@Mo@Ki@Mq@Ms@O{@Ms@Mw@OcAOeAKu@Im@McAK}@Is@K_AQcBe@qEk@oFQ}AMeAK{@Kw@M{@QoAYoBq@gEu@iE]kBScAg@gCY{Ay@mEgA}GKs@i@_Ey@iGq@qGKcAKw@OyA]{DC[Gu@Eu@OmBMiCa@}GKwBGaBYoIEsBK{HEuEAuC?aC?k@DwN?s@?eB@cB?e@@_E?wA@{IAmCEwDCkCG_CAy@MwEGkB[aI_@}HSuESwDKgCMgEW}HMsFOwLMkPE}EKkII}EOkGW_HQyD]_Gi@aIc@_Fe@wE]eDUmBIi@cA}Hu@iFEWYwAm@oDq@oDgAkFqA}FuA{FqF_U{AqGqAgFU_AESg@{BiAsEmAiFmAaGgA_GiAaGg@{CGYOw@q@oDsBqLMo@m@_D}@mEm@uCc@wBg@wBeAqEcA_E[qAeAeEs@oCq@eCYeAYcASw@k@mBs@qBaAeDe@{Ag@{AoB_G_AqCqAoDk@_B{@_Ce@qAyFmPoAqDa@qAk@cBeAiDeC}HcBwFkBuGcBcGm@qBc@}AmByGgA}Dc@}AiA}Dg@cBc@wAcEkM}@kCy@aCISWw@yA{DgDyIk@uAwAgDWs@}AmDcAyBQ_@]u@KSgA_CoCqFqAmCe@_Ac@u@kCyEs@kA}CmFcBoCYc@oAoBiBsCu@gA_AuA_B}Bu@eAoDkFiBqCwAqBi@s@c@q@Ua@KMi@u@W]oAiBgBkCqCaE_AuAgCyDkA_Bs@iAmD}F}CuFu@yA_DqGaBmDs@aBaAaCiBmE}BkGqAuDmAuDkAyDy@oCkAmEoAuEaBaHk@mCYoAw@}Ds@sDy@{Es@gEq@sEkAwIkCkRuAaKu@kFQyAYwB[{BWkB]{B]yBc@iC_@wBc@cC]gB]gBe@aCSgAOw@o@gDo@gDa@wBe@cCOw@g@gCoA{GeCwMcB_Ja@aCs@cEa@mCy@_Gi@gE{@oHk@{F[yCOgBk@wHWqEKiBSaEKcBc@qJOsD_@}HYsESoCGcA]sEQkBOkBWuCa@kDg@uEk@uEo@oFOqAWeCOoAc@wE_@yEKsAQiCW{EQ{DKoCIoBEmBEoBEoBCmBE{CCaAEsBKuEQ{EKeCS{DQwCG{@GcA[sDYiDQcBQeBUwBQwASyAScBWaBUaBo@eEs@mEW{Aq@iEe@sCYiB[oBe@oCe@yCsBiMYgBYeBIm@Oy@YeBYgBmAwHs@oEOy@UeBSsAOeAwAgLOuAWkCc@eE_@wEM{ASmCKyAMkBKiBKkBKkBIiBYmHEoACm@Q{GEiCAs@Cu@As@?s@C{BC_EAgBCsEAqEA}BG}DCgBEiBGiBGgB]{HGkAAWKmBKiBCi@SiDC[IcBGkA?IEu@Es@e@yIGqAQyCE{@KkBSyDCs@]cHKwBEiACaAC{@CaACiACoBCmBAmAAgB?qB@iBDwEDwCFiDDkBB_ADaADmADgA@YLiDNiEHaCH}CBqB@sBAeCCgCEkBCmACcAEcBIiCEuAMsFI_DCcAEuAEmAEiAEeAMuBC]OaDCs@CuACkCCmAGoBIaEAg@EcCI_CCgAEmAGsBI{CEwAEwAEsAE{AGmBE}AIyBEoAMuBMiBIw@Iu@OgAWaBWqAWkASw@[eAY{@_@gAc@iA]_Ae@oAe@mAc@kAi@sAc@gAm@}Ag@qAe@qAc@sAc@yA]uAYmAQ_AQ}@SkAW_BQoAIw@Gy@IuAK{AIqBE}AC{B?kC@gBBkCBqCB{BDeEBuBBeBBsBDiCBu@D}AFeBFmAHuAHsAFw@F{@PqBN}ATqBLkALiAJs@PkATwAPaAPcAVoA\\cBZuAPy@XkAVcA\\sA\\wA`@aBp@oCd@iB~@uD|AoGj@{Bj@wBZyAXoADWXmA^wBL{@RsATgBPaBN_B\\wEl@sJLiBHeAFw@JcALeALeAL_AL{@Ly@Lu@Lq@Nu@Ns@Ls@No@Nm@Lg@Ru@Po@Tq@Ro@Vu@Nc@To@Ri@Tk@Ti@Tg@Te@Tc@p@sAVe@Tc@NWh@}@^k@j@y@d@o@NSNQTYd@i@j@o@lAmAt@u@h@i@tAuAl@m@b@c@d@g@\\_@\\_@^a@d@i@X]b@i@`@g@\\c@`@i@b@m@\\e@b@m@b@m@`@k@`@m@\\i@d@u@h@{@h@}@Zi@Xg@d@{@\\o@^s@Zm@Zo@^w@`@{@\\u@`@}@\\w@^}@Xq@Rg@\\}@Tm@^cAZ}@Vu@Z_ARm@Vw@Vy@Vy@V{@Rq@Rs@Po@Po@Rw@Nk@Ps@Pu@TaAR{@Pw@Py@Ns@P{@P}@P_AN{@N{@N_APeANaANaAL{@L{@Js@Ju@Jy@J{@Hs@Hs@Hu@Fm@JeAH{@H}@H_AHcAFw@F{@F{@F}@FaAFgADw@D}@DaADeABq@Bq@Bs@B{@B_ABeABmABoA@{@@aA@_ABiCH{GDuD@oANgNBeCBoBByABsAB_ADoADmADeADaAFmAHwAHmAHgAHaAH}@Fq@H{@Hy@J_AJ}@LcANkANkAxC}UJw@Jw@Jy@Hq@Hq@Hs@Hw@Fo@Fs@Fu@Fw@Dq@Bc@Bm@Bu@B{@@c@@m@@w@@oA?_A?y@AkAAw@CeACu@Cq@Co@E}@E_AIgBO_DQyCIgBKgBIgBEsAO}BIgBIiBKgBIiBIgBKiBIiBIiBIuAK_CKwBKgBGkAQoDOiCQcCKiAE_@Ge@QsAWcBSiAY_B]eBg@yBs@uCs@{Cw@_D}@sDc@iB]{AYkAWmAQ{@O{@M}@UmBKiAKcBImBCwAEgBEqBCwACoBCyACoAGqBGsAKcBM}AMkAQuAUuAUoA_@_B[kA_@iAg@uAg@mAm@mAi@_Ak@{@{@iA]_@[[c@a@][[Ws@i@aAq@cAq@{@i@y@i@u@i@q@i@s@o@s@s@s@y@q@{@g@u@[g@Ua@i@eAe@eA_@_Ac@oA_@gAe@yAa@qAa@qAc@sAc@uAa@kAe@oAWo@[q@_@w@Yi@]k@i@y@i@u@s@y@u@w@y@w@{@u@_Ay@a@_@w@{@w@_Ao@}@u@kAa@u@Yk@Ue@a@_Ao@iB[eA_@wAYoAc@uB_@gBQw@c@eBe@{A]cA]{@Ui@Wi@k@gAm@eAu@kAk@_As@gAs@qAo@qA]y@i@yAc@uAYeAQs@Mk@YwA]iB[_Ba@oBYoAc@}Aa@sAg@{A_@aA]_AWq@m@eBe@yA_@sAWgAYwA[iBUcBS_BQ}ASkBQyAScBQ{AUkBOmAY{Bi@wDWcB]qBYiBe@oCq@{DSsAOgAMcAQeBSuBYyCMeBGgBEgBAiB@iBBiBBeABe@DcAHoAF_AJcBRgBTcBVcBZaB\\_BViAj@mBd@wAf@wAh@sAZq@P]n@mAp@iAr@iAt@cAv@_Av@_AhAoAjAqAfAkAhAkAlAoAd@e@Z]bAgA\\]nAsALMf@k@t@{@t@}@r@_AdA{A^i@p@iAn@kAj@oAh@oAVm@Pc@f@sAd@uAb@uA^uA\\wAZwAXwAVyATsAJu@J{@^iDFu@NgBH{AHcBFgBDwB@}@@aD?o@AeA?SAy@ASAU?OAMAOAUAOAOAWAWAMAMAOAQAMCO?MAKAMAM?KAMASASAOAKMwAO}ASaBSwASqA]mBc@yB[uA[qAo@mCm@aCoAaFu@uCe@kB]{A_@_Bc@aBK_@cA}DuAwFw@gDa@iBi@yCi@oDc@qD[qDC_@Eg@Ek@Aa@KuBG{AGuDAuD@yC@kA@m@?SBcA@{@?MBeA@UJyDHcDBiABqAJiGFeDPwIJsELwFJ{DNeF@c@PwEF{ABg@Z{E\\qE\\}DX_Dl@sGh@sFVeCZ}CRoBHm@JaALcAD[^yCVkBJq@XmBV{ATsA^sBp@eDVmAXoAZsAf@qBVcATy@Po@Ty@Rs@V{@Vw@Tu@Ts@Xy@Xy@Rm@^cAVq@Tk@Xs@Vs@Ti@Vo@h@oAv@eBd@cAl@qATg@Vi@P_@|@eB^{@f@{@P[Zq@\\q@\\o@t@wAZm@rAgCt@uA\\o@`@u@\\q@nAcCJSTc@NYXk@Xk@Rc@Te@Tg@Te@P_@Pa@Ti@h@mAn@}AJWRg@\\{@h@{At@{Bj@kBb@yA^sALe@`@}ARw@R{@`@kBXsATiARcAP_AVyAZgBt@sEp@uEr@cFx@kFLw@PcALq@Ls@VoA^eBd@sBj@wBT}@t@cCPk@Z_A|@cC\\{@Zs@b@cAr@{Ax@}AZq@Zi@j@aANUd@s@b@q@Xa@^g@t@aAv@aAZ_@j@k@b@e@^]n@m@v@q@jB{ApA}@t@e@hAo@RMh@W`Ac@lAg@lAc@~@[dAYvA]r@OjAQfAM|@It@Gr@EjAE|AE~@AdA?|AAzA@rA?lABdAAbAAfACz@CfAEv@En@Eb@EjC_@bDq@pCs@dCs@tAc@fA[bAYlD_ArA[nAWvAWlASv@KjD[vAIVAvAE|@AjA?zA@xAFr@DnALx@Jl@Hn@JhAP`ARr@Lx@N^Hb@J`Cp@^Ld@Nl@TxAj@l@Vj@Th@Vf@Th@Vf@Vf@Xj@Vj@Xj@Xl@Zl@\\l@\\t@d@\\PLDn@Zl@^h@\\j@Zj@Zj@Zh@Xh@Xf@TPJVJl@Xf@Vh@Vh@Th@Vj@Rh@Rh@Rf@Rj@PVHNDh@Rh@NrAZj@Lh@Jf@H`@Dh@Hf@Fh@Hh@Fj@F`@DH@l@DT@P@p@Bj@Bj@@T?TB~@DnA?l@A^AZAfFe@dAMj@Ip@Mx@Ql@Oh@O`A[VK`@OTKd@SpAq@n@_@fAu@pAaAd@a@hAaAv@w@|@y@d@g@d@g@b@i@lAoA^i@b@i@b@i@X[HKb@i@`@g@`@e@^g@l@y@l@{@d@q@p@eA`@s@n@kAr@}AZw@Pg@Rm@Ty@Ru@J_@TeANkAPyAHcAFcADeAB_A@q@?oAAmAEkBEoAKuBGcAGeAIoAE{@GsAAYC{@C{@A{@Aw@?aA@k@@e@BcABq@Bg@Ba@Fu@Fq@Fm@Fe@Js@T{AXeBRoAl@gEDUDSDSDS`@mBb@yBHg@Jo@Jo@Hi@Jq@L{@RyANqAFo@De@Dk@HwALgBHoAHaBJkEBwB@}B?m@AeCAo@E}BGeCOqDIyAGaAG_AGaA[eFEs@Es@Es@Ew@Ew@Ce@Ci@Co@Co@A_@CcACqACaBC}CAcD?sA@qA@y@BwADmBD_BFwCHaDJuDH}CDeF?aDCiECgCEeCMoEEaAE{@E{@GgAIuAIoAG}@Gy@Gw@IaAI{@Iw@KcAK_AK}@M_AM}@OeAOeAMw@Mu@Ms@WyAo@kDy@eEkCoMy@iEeA}Fm@kDs@kEa@gCs@wEQiAU{Aw@}Ee@kDo@}ESyAm@_Fc@yDm@uEe@oE]kDc@kE[eD[cDUiCW}CO_Bk@eHSmCOuBo@uJSeD[mFYqF]iHo@kPI}BOcFG_CYeMU}NG_FGsIEcV@gH@sDBoFD_FBaCBoGAyDAkBE}CCmAIwCIcCIoBK{AIuAGcAIeAIcAI_AI{@KcAKaAK}@K{@McAOiAOgAOcAOcAOaAMu@QkAQaAQ}@SkAi@{C]iBa@_CQ}@UuAa@wBiBkKc@gCSgAQcAQaAQeAOaAOcAM_AMcAK_AQgBUiCKyAKoBCm@C}@C}@CiAEoD?a@?}B@}ABsADyAFcBDaAHyAHmAHkAJsAH}@Fm@JaAHq@Ho@Hm@Hk@Ly@Lw@XaBNy@Ji@`@qBjByILm@RaARcANw@Hc@N{@ZiBF_@DWJs@Hk@Hm@D]Fg@JaAFo@Dc@BY@MB]Dm@Do@HsABe@D_ABm@@U@[@_@@g@@k@@o@@oB?aAAaCA_AAi@Aa@Cw@AYCm@Ci@Ey@Ce@Es@C_@C_@C]C[Eg@CYEe@Gk@CUGi@MeAGe@Gc@Ik@Ga@QeAG]Ic@Ow@Ia@UgAS}@Kc@Ka@Qq@s@kCW_ASs@c@{AUw@q@}BGS[eAUw@Mc@YcAa@yAOk@Qq@Sy@a@eBI_@Mk@e@{BYyAKk@Mu@G_@G_@G_@c@}CGc@E[Gg@E]K_ACWGm@Ec@Gu@Eg@Gy@SwCCa@Cc@ASE}@AUKqCAYAa@Ag@Am@EiEAmB?eB@cC@}AB_B@e@@a@By@Bq@DaAD}@Be@Bc@FcAJ}ALeBFu@HaAh@_GLoALmAbA}JPiBLsALuAFs@Dg@LeBHmANmCBYBc@Be@HeBDeADkA@YB}@@a@BoA@m@@{@@cA@_B?qAAoCAiBAuACwBC_BGoDM{GQiJWcNAq@EmBSsKE{Bc@qTS}Jc@aVCsAC{AAsA?qA?mA?yA@_B@eABaBDaBDuADyADsAHkBHaBJgBLkBJwAHeAH}@JeALiALgAPsAPqAT_BVaBV{ATqATmARcAVmATaAVgAVgATaAVeAVcAXiA\\sAlFuSrCyK^yAXiAXkA\\wAXmAXqAVkAVkAVmAXsAXsAVmATiAReARgARiARkARmAPiAPkARsARqARsAPmANgANgALcALaALeANoA\\_DXsCN}AR{BXeDVgDTcDPiCNoCN_DNoDJeCFoBDsADyAHcDF{DDkCB_CBkC@{A?m@@aB?gBAmBAiBA_BAsAAmAA{@A{@CiBE{BEcBE}AEyAE{AGaBGyAKoBKiBMyBOmCMuBO_CQiCMeBQ_C[wDeAuLMyAKgAMsAKiAI_AM_BKwAIsAI{AGuAEwAC_BCiBAiB@wA@{@@eABqABkADkAFqAHsAHmAJsALwAJeANwAJ_AJ}@TmBZkCTkBToBVcCRoBPgBPmBL_BLeBHoAH{AHgBDkAFuBDiBBqB@iB?oBAsBAqBCgBEqBGoBIuBK}BMeCM}BM}BM_CM}BGoAGuAEoAEyAEsACkACuAA_BAyBEuLAcBAwAAiACkACgAEoAEmAGyAGmAGgAGaAIkAKqAKiAKeAKcAMgAMgAQsAQuAQsAiJys@iCeSUeBUeBS}AQqAQwAMiAMkAKgAKoAIeAIiAGiAGqAEmACiACoAAgAAkA?gA@cA@aABmABkADoADcAFmAFiAHkAHcAJgAJaAJ}@L_AL}@L{@N}@N{@Ny@Nw@P_ANw@X{AX}AZeBVyARkAHi@XqBHk@Fe@J}@J_AHu@BUDc@Fw@Dg@Ds@Dw@FkABk@Bq@By@B_AByA@_A@eCC_DCaBE_BCk@GwAE{@K}AM}AO{AQcBIq@Im@SuAa@eCSkA]gB_@kBg@aCm@uC]aBOu@Os@SaAMo@WyAQeAW_BKu@UeBIq@Ea@Gk@MuAKwAG{@Cc@IgBCs@Cu@CaAC_BAgAAqB?a@@eABiBDgBFiBFsAL{BJuALuAPgBToBToBR{Ab@aDn@{Ed@kDVmBf@wDf@uDl@yEd@wD`@eD^cD^iDb@}DNsANuANwANwAZ_D\\iDZcDPiBBWN}ADi@JiATgCJiANeBTuCL}AXoDXuDJqANwBRqCJ_BHuAJaBH}AHyAHsANaCLiCDq@L{BPuCFcAFiAPaDN{CHeBFeBDuABcADwC@wA?{A?qA?gACwBCkAEaBG{AKgBIqAK{AIaAQkBQcBUmBMcAa@mCSmASeAG[YuA]{Aa@eBk@{BWcAa@{AWaAw@uC]oAYiAU_AQs@ESGYSaAWsAMs@Kk@Ko@Ii@Im@Ge@Gg@Gg@Iy@QoBWyDGgAG{AEmAEgCAw@A_BAyB?yCA}D?cC@aA@mBB_F?eBAeBAgC?mA?_A?cA?mAAgAEmICwFEyGAqA?oA?eA@{C?o@AcCA}BAmF?_AAcBAwI?}@AwD?eF?k@AqA?gD?{BA{A?eA?iB@eB@}A@s@BiADeADo@LaBFs@PeBR{AZsBRiANu@VoATkAVmATgAVqA\\iBZmBRsAZyCL_BJcBDiAB}@BeA@oA?kAAmACuAEoAGoAKuAOiBQeBUmBUcBSsAWcBg@cDMw@[sBW_BWaB[sBYiBSsAWcBa@mCSsAYeB[qB]{BSwA_@eCi@yDm@sDi@cDc@wCU_B[mB_@gC[uBe@qDMkAMsAWyCK{AGeAGqAGyAG}AEwACqBAaA?yA@eBBgBDkBDyAFsAHwADu@HiAJsAH{@Hw@LiARaBTaBTwAZgBNw@\\cBj@eCXkAt@uCLe@VaA\\qAl@_Cb@_Bd@gBXgAZkA\\qA\\qAl@{Bv@wCn@gCp@uCP}@RoAPgAXqBLmAL{ADq@Dy@DcABeABsA@iA?sBAaACgAEiAE}@QaDOkBQcBUsBMaASwAE_@UaBU_B_@gCa@mCUwA]wBWwAUsAUoAc@eC_@uBg@iCa@kB]gBWyAW}ASqAM}@Ky@Is@Iw@I_AIaAG{@GcACc@AYGgAGwAMeDMmCQkDEu@KqBGeAIsAKwAKuAKoAIaAIcAKiAOoAGq@McAK_AIu@K}@Ky@M}@OaAW_BO}@M}@O_AOcAM{@M_AKs@Io@Is@Go@Ek@Ew@Cu@Am@As@?gA@{@B{@D_AFeAHaAJ}@Ly@Ls@Nu@Pw@Rw@Ru@Pm@Tu@Rm@Vu@f@_B^iAZ{@Tk@Tg@Rc@Te@N[NYf@_Ab@u@p@eAn@_Ap@}@f@m@j@m@x@y@n@k@h@c@r@i@t@g@v@e@h@Yp@]x@]b@Q~@[t@Sp@Or@M`AOt@I^E~@KbAIn@G`AIr@Gt@GlBUfAQdAQn@Ol@Oj@Op@Sn@Uh@Sl@Wn@Yl@Yl@[h@Yf@Yh@]j@_@b@[h@a@f@a@j@e@j@i@h@g@d@e@f@k@h@o@h@o@f@m@f@o@f@s@b@m@b@o@^k@^m@^m@`@q@b@w@^s@^s@Xk@Xm@Xm@Xm@Xo@Xq@Vo@Vq@Vs@Xw@Tm@Vs@To@Rm@Ts@Tw@Ty@VaAXgAXgAz@eDz@gDtEqQ^wAZkA`@{A^sAXcA`@uAf@_Bb@qA~@mCb@iA`@cAl@yAn@yAh@oA\\u@j@oAb@_AbEwItAuCz@gBrAoC|BwEP]l@qAJSVk@N[l@uAf@eA`@{@^w@^w@b@_A\\m@z@iB~@uBtAuClAeCP_@jCuF`BiDn@sApAoC`@{@j@mAh@gAl@oAd@aAd@aAh@eAj@eAn@kAl@cAl@cAl@aAr@eAx@kAv@eAj@s@f@o@f@m@p@s@n@s@r@s@dAcAp@o@z@u@z@s@~@u@x@m@n@c@bAm@j@]~@g@lAq@f@Wz@a@~@a@jAg@`A_@v@[dAa@r@YnAe@`A_@fAa@dAa@jAc@z@]dA_@tAi@bC}@jAc@z@[tAi@`A_@fAa@z@]dAa@jAc@hAc@|@]dAc@t@]lAk@nAo@dBcAfAq@`Aq@v@k@jAw@jAcAbA}@z@w@`A_Ar@w@t@y@pA_BPU`AoA|@oAjBqCv@oAt@oAz@}AjA}BhAaC`@}@t@iBf@oA^cAh@{Ax@cCr@}Bh@kBXeARw@VcAb@kBVmAb@wBh@kCVyAT{AVaB\\_CV_BV{ADUPcAfAmGl@qDHm@Jk@DSHe@H_@F]FYBSLw@ZgB`BeJj@eD`@yBHa@H_@VgAVeAVcAVcAz@iDt@uCtHcZZmA^yAZoAVeATaATcATeATiARcATkARiARkARqAPmALcAJ{@Hs@NsAH}@Fm@JoALaBLmBLqCHoBHuBFcCBwABkB@aC@gA@mABuB@{A@iBB_BBmA@g@@c@By@F{ADiABk@Bc@HuAHqAHiAHeABYBWBUPgBf@kE`@gCl@yDXaBZaB\\aB^_B`@}Ab@_Bb@}Af@{Ah@{Af@yAj@yAj@wAl@wAn@sAp@sAp@qAp@oAr@oAp@mAp@oAp@mAn@oAn@qAl@qAZw@N]h@uAh@yAf@yAd@yALa@T{@`@}A`@aB\\aBRiAFWReAF]VeBVeBNoALqATuBPqBLqBF_ADw@HgBFuBDgBBiBBeC@_B@oB@oB@gB@aB@_C@iB@uBBkDBwADmBF}AHaBFkAF}@L_BN_BRkBRaBJs@Jo@^wBP}@P{@TgANo@Nm@Ni@Rs@\\kA`@oAh@{At@mBf@kAn@uAl@iAx@{Ah@y@v@mA^i@Za@p@{@v@cAv@_A|@eAz@eAt@_Az@eAx@iAx@kAn@_At@kAt@mAj@aA^q@Tc@\\q@~@oBVk@\\w@l@yAb@gAj@{AVs@Tq@^iAv@kCV}@`@yA\\qAl@sCXoA^iBb@aCh@mDZ{BTiBXkCRuBRaCLiBNaCJoBTuENkDDcAPwDF_BHoBFsAHiBLgCJqBJkBLqBL{APgBTmBR{ANeA`@iCVsAXuAPy@^{A\\qA`@uAj@gB^gAp@iB\\}@t@iBf@mA\\}@r@iBf@sAd@sARm@ZcA\\kAb@_Bx@oDZ}A^yBTyAT{ATmBRoBDe@JkALaBN_CHeBFeBF{BBwAD{B@sD?wBAwBAoACmBEyBG{BG_BKyBI}A[gFWmDMcBOsBIkAG{@Ea@YqDa@wFQaCEg@OsBQyBU_DQ{BO{BGaAK}AMqCKmCEeAEaBGkDA}AAaC?iC?qB@qA@y@BwADkBFmBHgBJoBLwCF{@F{@L}AHaAN_BRoBP}AVuBNmA\\{B^aCXaBj@wCx@yDd@sB^cBb@iBZkA`@}A^sAb@{Al@qB`@oAb@sAb@uAj@_Bd@oAv@sBd@kAd@kAPc@Vm@n@wAxA_DdAsBx@{A`AeBdBoCbAyAp@aAbAqAdAoAvA_BnBsBlBgBhAaAhA{@~AkAjAw@tBoAnBcAjCkAfBs@fCy@nBk@bAYhBg@tCu@xBk@lCu@~Ae@b@MbCq@tCu@xDcAbEgAhDu@jB]t@KLCx@ORCJAtAQ~BStBMpAGfBEtAAd@?rB@zBDpADrCJt@Fl@Dj@BrAFX@tBHbCHdADxBHpBFlAFdCL~CPxAHrAJrAJ~BV|@L~@NnAVpAXnAXjAXz@TzAd@|Bx@hBr@|Ar@hAh@|Av@tAv@`B`AfBfAlBlAbC~ArBrArAx@nBpAtAz@rCfBdBbAp@\\zBbA`C`AlC`AnBn@zAb@nBb@pCh@hC`@jAPv@HpCTzBJbAB`BB`B@hBA~AEbBIlAIfBOvBU~Ce@jDs@`D{@pBm@xAe@z@YbA_@`Aa@nBy@dBy@lDeBjAo@ZQhF_DtDeCfBoAjA}@~CgCbBwAfC{Bt@s@zAyAhBkBzA_Bv@}@X[fBsBj@q@b@k@lAyAz@iAt@cA|@oAbAyAxAyBt@kA`A{A`BoCzAkCxB_ExAqCrAoC|AcDrCcGbDcHbAyBjAeClAgCtAqCjA{BhAwB`ByC~@}AhAiBjAiBnAkBbAwAfAyArAeBbAoAnAyAh@m@p@u@`AeAbAeAn@o@n@m@r@o@dAaA~@y@jB{AhA}@dBoAjAy@|@k@dAq@jAu@zBqAdDoB|DyBbCuAvBmAjAq@tA{@l@_@t@g@nA}@z@o@x@o@`Au@`Ay@hAcAp@o@p@q@dAeAbAgAbAiAjAuAxAkB|AwBvAuBbA_Bx@sAfAmBbAiBnAeCtAqCfBsDh@iAr@_BvAwCvAqCpA_Cx@uAr@gAfBcCpB_CdAgAnAmA`BuAhA}@z@m@l@]xAw@nBaAtAm@~Am@`Cs@rBe@bBY`BSfCWpCW|D]bCWhBSpC]jDe@nCe@tDu@dDs@lCo@hA[d@Mx@OxA]bCm@ZGbBa@nCs@xCy@^KhBg@lD{@jAYb@KbDw@zCw@f@MHCnAY~Bk@~@Y~@UxBi@bAU~Bg@bAQpAUjDm@nCc@pBYtAQ|@KdAKx@Iz@I~AMhBMzBMpAGlBG~AEz@An@AbBA|@?t@@t@@`A@bBDvAFpBJdBNfCXzBXtDn@hCj@|@TpBh@pCz@zBv@^LfA`@d@RnAf@|BbA|CvA`Bt@|@`@tB~@rChAnAd@r@VzAh@r@Tf@NnD`A|@RhATfAR`@Ff@HtAPtBRnBLx@F|BJ`CDr@?x@?vCGvBI`COzCYbGq@`H}@lBUzFi@tEWlCG~BCjCDfEDvEPbENlEPnBDdDDr@?|@?~BCnCGvAGfAGfAI~AOdCYpBYrB]vAYtA[xA_@|Ac@`AYl@QbBi@dC{@|CgAbC}@hDqA|B}@\\Mv@]XMdBw@~Aw@|@e@dAm@lAu@dAq@t@i@nA}@pAcAzBiBlBgBv@w@p@q@vB_C^c@hByB`@g@Zc@Za@~AuBbAwAdAaBv@oAz@wAlAqBh@_AT_@rA}BpBgDvBmDhAmB|@_BvAgCxAgCv@qAr@mAr@mAj@aAr@kAr@kAz@sAfAaB|@oAl@y@r@_A|@iAlAyAnAwApAuA|@_AvAsAp@m@x@q@lAcAv@m@p@g@bAs@`Aq@`Am@hAs@f@Yz@e@r@_@j@Yj@Yj@Wp@Wb@Qn@WbBo@v@Yr@WbA_@tAe@~@[hBo@~@[vBu@hBm@vAg@pCcAr@WfAa@rAi@~@a@fAg@pAq@vAw@TMfAo@`Am@bAs@`Aw@lAcAp@m@dA_A|@}@n@o@^a@|AgBx@aAb@k@V]z@kAt@eAz@sAv@oAb@u@~@cBx@_Bb@_An@uAtA_DTi@`@aAl@}Ap@mBd@wAj@kBz@{CRu@ZmAVgAXoAHYVkAVmA`@uB`@yBj@eDj@aDXcBd@kC\\iBVoAZ{A\\yA^yAZiA\\kA\\gAZaA^gAd@oAd@kAb@eA\\w@b@aAf@gA`@}@b@}@h@iAz@gB`AsBt@_Bt@}AdA}Bt@cB|@sBj@qAn@{AXq@Zy@l@{Af@sAj@{Ah@yATo@d@uA^gAj@cBh@aBRo@Tu@`@qAdAuDn@}Bf@kB\\wAZoAl@eCXoAd@sB^iB`@mBXwAP{@P_ANw@P_APaAPcAPcAN{@Lw@XiBTyAZuB\\}BZyBZyBXqBZmBZwBRuATcBZsBZsBZmB`@eCZkB`@_C\\iBd@aCb@uBl@oCt@_D`@aBb@cBb@_Bj@qBj@mBb@uAd@yAf@wA\\aAj@_BvAsDb@gAh@sAv@iBt@aBj@oAtAoCp@qAz@_BlAwBl@cAt@mA`@q@~@wA|@qAz@mAfB_Cp@y@j@s@~@iAfAqAr@y@j@k@~@aAt@u@j@i@~@{@z@u@lBcBbA}@`BuAlAaAz@s@t@m@|@s@|@w@t@o@p@o@dAgAVWn@u@l@w@h@s@t@eAVa@`@o@l@eA|@aBf@cAx@kBj@yAf@uAb@qAd@_B`@uAb@gBf@{Bn@qDVeBPoANoALoAJeAH{@Dc@JmAHiAF{@FeAFoADcAFyADkADsAB{@BaAB{A@oA@{A?cB?cBEaFCeBEoBAq@Am@C{@EuAAa@Cw@EoAEgAC{@Ck@I{BGgBGoBGwBG_CEkBEmBCcBCyACiBAkBAeBAaB?gB?sB@oB@oBByBBwABaBDsBDaBDsAD}ADsADoAFyAFoAFoAFmAHyAJcBJaBLiBLcBL_BNeBN_BN{AN{ANuANuALiANoAPuAR_BRyARyAT_BdAiHVcBT}APoANiANkALiALoAJiATyCJkBDo@DyAF}BD_D?wCAoAEaCEgBKwDGaCKmEIwEAeAAmB?}C@aCB_CB}ADkBFmBHoBHeBL}BLiBNqBNkBJeAJ_AH{@ReB\\iCXsBZmBb@mCX_BNy@TmALq@Ny@^sBRmAVgBLaALeAHcAF_AB_@FiA@[@c@@g@@q@@oCCqBGsBKkBG}@KkAS}BSiBUsBOcBMoBEeAAq@Ai@Au@?cA?W?Y@[DgBFyDB_AB}@B_ABmB?mA?kAAq@C_AGuAG{@I}@K}@OgAW{AY{AUcAa@_BSu@w@{C[sAMi@Qy@SgAU{AQ}AM{AEs@Cw@Am@AcA?}@BgBFyAF}@ZoCVoBVuAVwAh@wCPcA`@mBVsA\\wAx@{C\\iAb@uAdAwCf@mAn@uApAgCdAgBr@iAp@_Aj@u@r@{@bBkBx@w@t@u@`A_AzCsCvCwC|AgBrAiB~AoCpAoC|AmDpAwCdA}Bj@qAt@eBtBgFXw@d@}A^wAVoA`@_CR}APgBF{@Ds@FgBFiD@_C@eC@qD?k@@qE@wA@sD?}B@qB?yA?kA?}AAcAAk@Ag@Cy@Co@Cc@GiAMeBIy@MkAMcAIi@Ic@Km@UkAQ}@Qs@Me@U{@Uu@a@kAYu@m@yAa@y@g@cAu@uAeAgBcAeBaAaBu@}Ak@oA_@{@[w@M]e@sA_@eAK][aAg@aBg@_Bm@qBsAmEqAaEqA{DgBeFc@kAe@mAmA}CgAkCqA{C}@uB_@w@oBmEcCsFi@mAYq@O[i@mAi@mAGOkAqC_@{@KUg@sAc@eAwAuDM_@KYwAaEg@{AYy@Qm@a@oAe@{AcAkDq@aCk@wB_@{A]uA]wAk@eCi@iC]}AWuA[aBO{@SoAUwAWeBOkAOiASkBK{@K_AI}@OeBOkBIoAG_AGcAIeBGyAGiBGuBEiBAs@Ao@AeAAsB?aB@cB@aCBgC@g@BkAB_ABu@Bs@LiCNuCLqB^kFFy@LeBXuDT_DRyCLuBPcELsDF_EDaDBwEBqG?yBD}FDyDHqDNcE`@kHPcCTiCRyBNwAP{Ap@{E|@cGx@}En@yDf@eDx@uGj@gF`@wEVwDXoFDaAHaCB}@@u@BcBBkC@qD?yB?aC?cC?{C?wB?gDBiDFuEFeCFkBHeBHiBPwCViDXcD^kDj@sEn@kEr@qEfAuGv@sEn@aEt@aFp@oFNyAZ{CTaCNiBRwCRmDRgEJkCFoBFiCF_FBqB@gB?kCAyCCqCEyCEqBKcDGmBCm@IaBGuAI}AKiBOmCQyCUoD[eFMwBGmAE{@GmAIgBK}CCy@G_CGwDC_EAwEBqFFmEHmDLyDHsBLuCDiAD{@FiAFeAL}BV}ELeCJgBHwAHwAH}AHiBLoCHgBHuBHwBFiBDqAFeCDkBBoAF}DDmE@yB@uC?iB?kB?qBAeBA}ACaBCgBCgBC}AEuCEwBA_@Cy@EaBEeBI{CG{BC}@A[GiCI{DIiEGeFC}DAmC?oB?eC@yDBqDBwCFeDH_EFeCHiCH{BHoBHiBPmDT_El@oJPeCJcBFs@NwBT}CTgDVqDNeCJcBNmCToEHoBHoBFeBNaGHeEDmCD{DBoD?qB@kEAuA?k@A{CCyDGcFMoIImEKuFIwFGoHCmF?gD@wCBkDFiEDuBJaEFoBFgBHgCFyAHwBF{AH{BF}AFaBFqBFyBDuBDsCBwEAkEE_EIqDK_DQoDWcEYuDUqCSyBg@uF[cDMqAWkC[gDIaAOeBQyBKwAIkACc@GaBEaAC_ACq@]wKIuBGiBCkAEeAEm@Cg@C{@Ci@EmACy@GiBEaAEsACw@E{AEsBCcAGiDEaCGeDI}DG}BGeBGgBG{AGwAImBKuBIcBMiCIcBKsBMiCGqASuEKcCMyDMoFEmBCoAAgA?i@C}CAsAAeE?}A@eB@eCDuDBcCDqCHyCPoFJiCLoCV{EVwDVoDV}CPuBLoAPcBPgBh@sEh@aERyAXoBl@}Dv@uEn@mDXwANw@ZwAv@wDXmAn@kCv@}CbAwDhA_EbAiDlA_EdByFjA_Ex@aDNo@V_A^}Az@yD|@iEv@wDb@wB|@cEbAcEz@aDd@}Ah@eBdAyCrAiDzBgFrBgE`AoB~@aBhB_DrAaChBcDpCgF|A{C`AqBlBcEn@{Ar@aBrA{C|AsDjAmCbA{BhA_Cn@mANWZk@DIh@aAFKp@kAh@y@n@_Af@u@r@eAXa@RWRW`@i@xAgB~@cAfAiAx@w@|@y@f@c@^[f@a@NMPMn@e@r@g@~@o@dAq@~@i@~@g@p@]~@e@xAq@b@Q`CaALEPGhA_@z@YzAe@tA_@XI~@U|A_@lCk@nDk@hFq@|AOvAM|@G~CUrBMZCTAVAv@EtCO~AKnAIxAKbAIvAM`AKt@Ip@Ij@GfAOpB[fCe@`ASd@KfAWfBc@d@MPEv@UfBk@n@SxBu@t@Yv@[r@YjBy@hB{@t@]r@_@n@[z@c@hBcAt@a@t@a@t@a@r@a@r@a@r@_@hBcAr@a@t@_@TM\\Sp@_@r@a@p@_@p@_@r@a@p@_@p@_@fBaAp@_@p@_@r@a@p@_@t@c@dB_AbAk@NIPK`@SRMv@c@x@e@v@c@z@e@~@g@|@i@l@]`Am@z@k@v@k@|@m@~@u@~@u@v@q@rBoBxB}BtBeChB_Cr@eAv@mAjBwCl@eAbBwCr@mAl@iAVe@h@aAZk@Zk@NYb@w@b@w@d@{@tAeClBmDXg@d@w@R_@R_@lBkDbCoElBmDz@_BxB}D|@_BtCgFf@y@b@u@d@w@h@}@n@cAh@y@d@s@h@y@d@q@f@s@f@q@j@u@l@w@j@s@j@s@f@m@d@i@h@m@f@i@vC{Cn@q@n@o@d@c@h@g@j@g@f@c@l@g@p@k@j@e@t@k@r@i@x@k@r@g@t@g@r@e@`Ao@z@i@z@g@x@e@z@e@`Ai@v@a@r@_@p@]z@c@v@a@p@]|C}AzAu@VMb@EHAJCLENGJEPIrEqB`@Q\\MZKVIPEDAXGVE\\E`@EZCb@C\\AjACxAE\\Ab@CZC\\EVEXGZIVIVITIVKTKNINITMTMTONKROZWXWVWVYV[X_@Zc@d@q@|AaCT]RYV]V[X[Z[XWHINMVSXSXQZQ`@S^QZM\\MZKb@M\\KJCJEr@Wl@Q~@Yn@StBg@`B_@fAUp@MpAUl@Kx@MFAdAMnC[fBOfBId@C`@C\\AvAGf@Cz@C\\Ad@CfAC|@EhEMXAd@AjAGbACb@Cr@CjBIxCKbACLAl@ClAEpAEzBIxAGvAE|@CpCGp@AbBAbB?fA@fABr@BZ@d@Bh@B^Bv@Ff@D|@H^D|ARl@Hf@Hd@HlATf@JRDVFLBd@Jb@Jt@RbBd@XHd@Lf@Nn@Rj@NTF`@Jr@Pt@RlA\\vA`@pA^dAZrDfAJBl@PZHb@Lp@Pv@Tt@Tz@VnDdA|@TTHd@Jz@Vz@Vd@NrA`@\\J^LRHxAh@b@Nf@Pd@Pj@Tn@VbAb@~Av@d@VlDtBz@j@t@h@`BnAv@p@p@l@lBbBxBtBvBvBxAtA~BzBjBdBjBxAzBzAhAn@xBbA`Bl@rA`@jAZtB^dCVhAFzBBzBEtAIdAKdAOnB_@|@U~Bo@vEwAp@SdDcAx@Wt@Ul@Qn@Ql@Op@Ol@Ml@Kh@If@Gn@Gt@KNALAbBKt@Ev@Cx@Ax@Ax@?lCClDCf@?~AAtAA`AAz@Cl@AvBCtBE`@AH?F?zB?rACl@AdACn@Cn@Cj@Cf@Cf@Cn@Cl@EnBIt@ElBMjBK|@EtAIvAItAGlBKh@Ex@Iv@It@Kj@Kn@OdA[v@Yr@]`Ai@PKv@i@bAw@lAgA`AeAd@i@^g@h@u@j@{@d@w@j@gAbAaC`AaC`@gARe@d@kAd@kAXi@NYP]P]N[N]Re@Tg@N]N]N[N]N]N_@N]N_@L[L[L]Na@Pc@Tm@~AgENa@L]L[N_@Na@Na@L[N_@JUFOFMFMNYJSLUNWPYNULQLOLMLKXYZ]XUVQZS^WZQf@Ud@Ub@O|@[ZIZILCJCZE^E^Ab@?J?F?Z@^DTBVDRDTBP@V?TBRJTFZFRBVBb@@L?RAH?d@@L?P?NALALCJELILMJMFKNH`@TnEhCv@d@RLPLNLNNPRXZp@x@Z`@h@p@d@j@LPFHJLd@h@^`@j@l@PTDFJLJJl@r@DDlAvARTt@v@j@n@X\\Z^p@z@PRRXHHJ@NKDIDMH?\\CFAXC"
//         },
//         {
//             "summary": {
//                 "hasTolls": true,
//                 "hasExpressTolls": false,
//                 "diffs": {
//                     "cheapest": 21.68,
//                     "fastest": 5.62
//                 },
//                 "url": "https://www.google.com/maps/?saddr=48.595900,2.580240&daddr=48.599170,2.602830+to:48.594530,2.635660+to:47.915590,5.221150+to:48.601880,6.384240+to:48.772080,7.240600+to:48.585040,7.736426+to:48.585040,7.736420&via=1,2,3,4,5,6",
//                 "distance": {
//                     "text": "314 mi",
//                     "metric": "506 km",
//                     "value": 506051
//                 },
//                 "duration": {
//                     "text": "4 h 38 min",
//                     "value": 16725
//                 },
//                 "name": "A31"
//             },
//             "costs": {
//                 "tagAndCash": 33,
//                 "fuel": 69.78,
//                 "tag": 33,
//                 "cash": 33,
//                 "licensePlate": null,
//                 "prepaidCard": 33,
//                 "maximumTollCost": 33,
//                 "minimumTollCost": 33
//             },
//             "tolls": [
//                 {
//                     "type": "ticketSystem1",
//                     "tagCost": 29,
//                     "tagPriCost": 29,
//                     "tagSecCost": null,
//                     "cashCost": 29,
//                     "licensePlateCost": null,
//                     "prepaidCardCost": 29,
//                     "currency": "EUR",
//                     "tax": {
//                         "isTaxIncluded": true,
//                         "taxValue": 4.83,
//                         "taxPercent": 20,
//                         "taxName": "VAT"
//                     },
//                     "tagPrimaryNames": [
//                         "liber-t"
//                     ],
//                     "prepaidCardNames": [],
//                     "tagPrimary": [
//                         "liber-t"
//                     ],
//                     "start": {
//                         "id": 330082001,
//                         "lat": 48.589131,
//                         "lng": 2.656889,
//                         "name": "Péage des Éprunes",
//                         "road": "A5",
//                         "state": "Île-de-France",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 6979.06,
//                             "time": "2024-11-29T11:31:45Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T11:31:45Z",
//                         "timestamp_localized": "2024-11-29T12:31:45+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     2.656889,
//                                     48.589131
//                                 ]
//                             }
//                         }
//                     },
//                     "end": {
//                         "id": 330561800,
//                         "lat": 48.540558,
//                         "lng": 5.909369,
//                         "name": "11 Colombey-les-Belles",
//                         "road": "A31",
//                         "state": "Lorraine",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 333436.76,
//                             "time": "2024-11-29T14:13:03Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T14:13:03Z",
//                         "timestamp_localized": "2024-11-29T15:13:03+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     5.909369,
//                                     48.540558
//                                 ]
//                             }
//                         }
//                     },
//                     "discountCarDetails": null,
//                     "discountCarType": null,
//                     "height": null
//                 },
//                 {
//                     "type": "ticketSystem1",
//                     "tagCost": 4,
//                     "tagPriCost": 4,
//                     "tagSecCost": null,
//                     "cashCost": 4,
//                     "licensePlateCost": null,
//                     "prepaidCardCost": 4,
//                     "currency": "EUR",
//                     "tax": {
//                         "isTaxIncluded": true,
//                         "taxValue": 0.67,
//                         "taxPercent": 20,
//                         "taxName": "VAT"
//                     },
//                     "tagPrimaryNames": [
//                         "liber-t"
//                     ],
//                     "prepaidCardNames": [],
//                     "tagPrimary": [
//                         "liber-t"
//                     ],
//                     "start": {
//                         "id": 330064800,
//                         "lat": 48.771998,
//                         "lng": 7.241146,
//                         "name": "Phalsbourg N°44",
//                         "road": "A-4",
//                         "state": "Lorraine",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 450436.65,
//                             "time": "2024-11-29T15:08:07Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T15:08:07Z",
//                         "timestamp_localized": "2024-11-29T16:08:07+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     7.241146,
//                                     48.771998
//                                 ]
//                             }
//                         }
//                     },
//                     "end": {
//                         "id": 330065200,
//                         "lat": 48.769302,
//                         "lng": 7.602036,
//                         "name": "Schwindratzheim",
//                         "road": "A-4",
//                         "state": "Alsace",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 478579.14,
//                             "time": "2024-11-29T15:18:17Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T15:18:17Z",
//                         "timestamp_localized": "2024-11-29T16:18:17+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     7.602036,
//                                     48.769302
//                                 ]
//                             }
//                         }
//                     },
//                     "discountCarDetails": null,
//                     "discountCarType": null,
//                     "height": null
//                 }
//             ],
//             "polyline": "kkrgHo}vNW?g@gBOi@Qk@w@aClB}@v@Y^GPCN?l@BV@LGP]b@eBs@q@IMGKI]EUGi@G_@Ee@E_@WyBQuAGa@g@yDWy@cAcC]w@BI@K?MCKEEICG?GDg@kAu@mBYq@ISKQOUFI@M?MAMEIGEGAG?EBUm@oAyC_@aASe@Ug@Yq@OUQQQKM?WAAQGKKC@KBcBBsBB[@wDFcJ@kCA_AQ{BB_A@c@Hc@@]@gB@cE?yDAsB?y@?[CUGYIa@G[G_@Cc@?O@SD]Li@L_@b@_Aj@iAHJLFJ@JAJCHMJU@]AYAOGMIMKGMAMBKDGHGPCLAL?N?N@HHTk@hAc@~@M^Mh@E\\AR?NBb@?XAPCLELGJIHKDKDSFYFK@G?ICGEEEEIEOCMCOAS?M?Q@OBOFYH]Ja@p@kCHWJ]HYXy@Z}@HSDMHYF[Jq@`@cAnBwEn@{AvDcJ`AaCN]p@aB`A}B^aA\\aA^cAZaA\\aAXcAVaAVeAVcATcAReARcAPaAN}@NeANiANqALqALsAH_AFw@F}@F_ADs@H{AD_AB}@DcBBuA@wB?uBCsBAy@G}BI_CQwBGsAGy@[oD[kDSsBEa@MsAOwBASKyAEeAE}@Cs@CeAC_AC}@A_C?aC@aCB_AH{D@]@[Bi@JwAP{BPuBTwBHu@Ju@DYPqARoA\\eBVoAXsAVqA|@{CV{@d@{AbCcIh@cBj@kB`AmDd@cBT}@T_AR}@f@_CR_ARcA\\kBXkBRkBJuAHiAH_AFu@Fu@H_AH}@JgAJgALmANwALoANwALgANsANmAJy@Jy@TkBRiBp@iINiBPqBPkBFq@PoBPsB`@yFZkEPeCN{BNyBJaBJmBJqBFsADkADoAFsBFwBDyBDaDB_D@_D?iE?yBAqBEuECyDIwLG{IEkHKkREeHE}DOkREwHMgMA{AAwACuGA{@C}DCyDCcEC_GCkECkHCcFCyFCgFE_KAgDAmD?iA@}CBsCByAHyCH_CHeBH{AN}BJyAHgANgBJkANmARcBLgANkANgAPmAXeBV{AVwAXwAVoAt@oDr@eDR{@^aB`@eBp@wCp@yCf@}Bj@gCn@sCl@iCt@{C\\oA~@eDdAiDnA}DlBmFv@sB~@{Bl@wAn@yAlAoCZm@v@_BjA{Bb@y@t@qAx@uAfAiBr@iAdAeBdAcB~AgCbBoCbDiFhBuCtAyBbBiCtAqB|AsBhBcC`BwB~FsHrCoD~AuBnAaBfB{BvBqCzC}DjFaH~B}CrPoTlBeCdB{BvAkB`BuBtCwDbByBbCaD~DiFzAoBpBgC|@iAdDeEtAeBzCwDvAiBpE_GzDiFrAgBfB_CrAgBbCaDj@u@\\e@fCeDx@iAtCwD~B_DfCkDl@aAdA_BtA_C`BwCpAcCjAaCvA_DhAgCjAyCd@oAjAcDdA_DbAyCh@_B^iA`@kAb@mATo@Ri@Ri@Rg@Xq@Pa@Zs@b@aAf@cAh@cAxAoC~AsCl@gA~@}An@eAh@}@\\i@bA_BZg@dCcEvA_ClD{Fj@_Av@oApCqEtCwEn@eAbC{DbAcBpAuB`BmCtA{B`BkCnAqB|@yAvA}BvA}Bn@cArB}Cb@o@vAsBdAyAnAeBjBgCf@o@r@_AfB{B~AoBxBkCdBqB`BgBlAsAnAoAhBkBhBkBjBiBfBcBx@u@t@q@t@o@v@q@t@o@v@o@t@o@v@o@lB}Av@m@v@m@v@m@v@k@nBwApBwAbFmDjDcC|G{EfFqDbH_FvB}AjDcCpDiCfCgB|C{BnCmBvCwBlDmCtBcBlB{ApBaBnBaBlBcBhB_BxBoBfB_BfBaBhBgBjCiCjCmCfCoCjE{EhCwCbCoClBwBhBuB~BsCfBaCfBeC`B_C~@uApB_DxBmDfBsCjAkBdAaBpBaDrAwBdDiFpAqBzAaCnB}CvDeGdC}DtBgDtCsEzC}Er@iAh@y@pCmEzC}EnAoBbAaBjCcE`A}AfBsCnBaDrBeDj@_AbBmC|AeCxBmDxAaCzBqD|C_FnB_DbC{DfCaEnB}CbBiC`BeClBsCbBcCzAuBfBeCpAeBjA}A~@mA`AoAfAwAdAuAt@_Ax@cArBeCnCaDxGsHxEgFjGwG|FmGfL}LrC{CdBiBtGcHhDqDvA}AnAsAj@m@|CgDfFqFxCcDrHaI|EiF|DgEfDoDjGyG`HoHdDmDhAmAx@_AhAqAfByBfB}BjBkCnCcEt@kA~AoCpA_CdBgDvAyC~@uBtAcDvBmFnA{ChBmEt@eB~AsDn@uA`@y@nAoCj@kAvAwCvAwCvAuCdC}EzAqChCuEjCuEtGkLhCyE|AkCzAkCbAgB|@}A~AsCjAsBt@sAn@gAbAiBz@wAp@kAxD}GdAmBXe@|B}Dl@eAxAkClA{BrBaEfAaCfAeCXs@Tk@N_@Ti@h@sAdAwCfAaDh@cBj@iB|@sCnBiGzEgO|AyEdA}C`AmCnAgDnAaDx@sBbAcCnAuCvA_DrAsCfA{BhBmDlDoGtAaCnAwBvA}Bx@oAv@kApAkB|AyBbDqErBsCdBaCnBoC~CiEdFaHDGfCmDbB}BRY`CaD^g@RY~@qAlBiCn@}@rBsCbAwArBqChCmDdCiDfA}AbBcChBoCnAoBlAoB`BqClAuBzAoCz@{AdDcG`AiB|BoEvCaGpBeEvA{CxAeDrA_DpA_DlC{GpBeF~@gCh@wArAsDnAkDl@eB`@mA\\eA`@qAb@wAf@cB^oAZgA\\oA^wAb@eBd@qBViAXqAZ{AZaBX{ATsAVcBPmANeAPsANoALgAJcAHy@LuAJmAPuBH}@F{@F_ATkDLeBLcBLaBNeBj@gFZmC@OT}Ad@wCj@eDJm@ZcB^wBf@sCd@qCZoBRsARuAVkBL_ANuANwAZoDJwAJ{AJ{AH_BH}AFaBFaBDaBHiEHeEJeKX{ULsLHsIJoIHoINqNFqDHcGFiGJkGHqGJoJJsJPmMFyDDyDNmMPiMHsGHuG@eBBqAFwDDyDHuGH{GJcHHgH@w@DkCJcHHcHHaHB_BH}GF{DH{GH{GH{GDoCBkCF}DHyGF{DD}DD}DB}DB}DB}G@}A?}A?oMAeZ?sU?mG?a@?Y?gC?mA?uA?iB@gB@gBBgBBuBH}DFgBFeBFeBFcBHaBJcBJaBJaBLaBJ_BLeBNwAN_BN{AP}AP{AR}AR}AR{AT{AT{AHi@@GLi@^_CZqB^uBJk@r@yDvBcL~A}IhAiGBO|@}ERiAt@wDt@yDv@uDpAcG~@eEz@qDzAeG~@qDzA{F`BuF~AqF`BiFpBgGlAmDpAuDd@oArAmDfBsEjAwClAsCDKnAwChBgErBuE`CqF`CqFnBoElCiGjCaGhCaGhCaGjCcGpDiIlCiGZs@j@oAdAaCvB{ExAgDfC{F~AoD`CqFfCyFbCqFdCuFdDqHbCuFbBuDv@cBhBkE|BuF`ByDnAyChAoCj@sAzBuFrAeD|A}DL[FMj@uAdAiChCuGvBkFzCyHjDuIlCsGpBuEn@{AlE_K`DoHFMRc@fBeE\\u@fD}HbCyFbBwD~AqDdC{FnCoG`A}B~AqDbAwB\\s@\\q@p@qAfCwEbBuCdBwC`CeEhB{CpDiGpBaDz@sA~BiD`AuAx@gAjBcChAwAxAeBjBwBr@w@rCwCfBiB|B{BxCyCdCcChBkB|@{@zHwHp@o@pBqBzDyD`F}EnCmClBmBhDoD~AgBlByBJMZ[bAoApCiDz@eAdB}BzAqBnBoCtDkF`B_CtAoBV[jAeBvCgEpCyDrCqDt@{@fBuBfBqBt@w@~AcBzA{AjCaCnBeBpBcBrB_BnDiCvCoBbAo@bC{Az@e@p@g@^Yj@]j@]|A}@nCaB`BaAnBsAtAs@n@_@v@g@b@Ul@_@d@Y\\Sx@e@fBcAdBmAdAm@zAaAnBqAdBmAnCgC`@]`Au@n@m@p@o@fB}A~AkB`BiB~AoBlCkDjCwDzA}BxAcCv@sAjAuBrAiC`BcDXk@jAkCb@eAfAqCbAsCh@wA`@iA`@gAr@wB\\eAl@oBj@kBh@iBp@}Bp@aC`@_B~@cD`AeDdByF|@{CdBgGbB}F^sA`AeD~@_D^oA~@yCZeAv@kCxAeFV}@j@qBd@{AnBwGz@wCb@{AZcAZgAz@sCJ]r@cCZgAZgA^wA\\sAr@uCl@oCr@gDj@uC`@wBJk@He@RkAPeAT{AXoBXoBR_BR}AVyBd@mEl@gGRuBPqBp@sHH{@JeAJcAV{BP}ALeANgARsAT{AXeBVyA^kBZ{A`@iBz@oDj@yBt@gCl@mBl@iBp@gBx@yB`A{BbAyBfA{BdAoB~@{AhAkBb@q@pCaEdCkDnEkGfA_Bp@aAf@u@f@w@jAoB^o@j@cAdBgDpAoCbCuFj@uAl@}Ab@kAx@_Cb@qAdAcD|@{Cd@oBn@qC^yAb@kBd@uBLm@Ha@b@uBTgATeAp@kD^wBTiAZ{ArAkGx@mEl@eD|@kEp@gDZ{AZwAXoAZsAb@mB\\wATcAVeAd@cB|@iDrAqEvAoEnBmG|@oCx@iCf@cBh@gB`@oA|@kC^kAJ[ZeAx@iCb@yAh@eBtAoEd@{Af@iB|@iDZwAVoAr@kDZ_B^wBTuARuAh@}DV}BRkBV_DLaBTwDNqCHwBLgFD_F@}DAkDIsHE}BK}FIgEIiECqAAu@EwBSqKKiGG}CI{DMkIIsFG}HCcH?qCBuG?uCBwCJiILcHNmJFeED{CDaCBaBDkD@eA@}@@}@@}@@oA@qA?qA@cC?wE?}BAcCCmCCcCCeBCiCWeOOwIUaKIsFQyIIoCGaBGyAScEW_E[sEQ{BQqBi@yFOuASaBaAwIa@qDiA{Jq@eGa@yDg@cGCWGk@OmBMaBMoBKgBKoB]kI]}HIwAQcC[cEc@{Eg@{Ec@{Do@yFSkBUwBO}AQiBKoAQcCMoBKoBGgAGoAEmAGkBGeDEuCG_GCqEGyECaBGqCCgAEmAIqBI}AIyAO{BQ{Ba@sEMkASaBQuASwAYkBUwA_@_CsAwHc@eC_@{Ba@_CO_AO_AWeBSyA[aCY}BMoAI_AOeBKsAMeBIsAKeBGyAIoBE}AGuCCwAEsDE{MA_PAqLCcKE{EIaFIiCI}BSuDMkBk@gHMuASoBY{B]_Cg@}CoAgHeAwF]gBWsAYaBSmAW_BMy@OgAWqBMcASgBIw@KeAGq@Gq@Gw@Gy@IkAGaAIuAGgAE_AEiAGkBCoACqACiAAy@A}@?m@?yABiFFcEDoBHwBJwBH}AFeAF}@NwBX{D`@qEh@}Fh@{F\\kDZ{CLwAf@qFZcD\\uDFs@HsA`@aFTgD\\sFRoDT_FVmGN{DToFNwD\\aIV_GP_DNeCFaANeCHaADm@F{@HkAf@iGj@mGl@aHl@{Gh@cGb@cFf@yF`@kEl@{Gd@cFZsD\\wDh@qG^_Eh@_HV_ET_EP_EPsDNgEFwBBqA@g@FkCDoCByBBeC@yB@yB?aCAqDE}EAsAAuAEoDCkAIyDC{@OsEQmECw@IcBKoBMsBKiBIqAIkAM{AKoAKgAMqAGk@Iw@E_@E_@K}@OmAg@yDWiBKu@Ga@CMEUG[I_@Ou@SaAKg@Mm@S}@Mg@Oo@[uAWeAYgA_@sA[gA]iA[_AUo@Oc@Qg@Si@Qe@Wq@Um@Sg@Wm@]y@_@y@]u@_@w@e@_A]o@Uc@S_@_@q@_@o@c@s@]i@cA}AU]U]Ya@U[W][a@[a@a@g@_@e@Y]c@i@[_@k@q@]a@m@s@g@m@g@m@c@i@i@q@k@u@a@i@[c@]e@[c@W_@q@cAYc@]i@U_@_@o@k@cA_@q@g@_AWg@Yk@Ue@_@w@c@aA_@{@]y@Yq@Uk@Yu@Yy@[{@Sm@Wu@So@_@mA]iAMc@W}@YaAMg@Ka@WeAWeAUeAQw@Os@Q}@Mq@SeAQcAMw@Ig@My@My@Ks@OcAMaAKy@MgAKaAMqAKgAIkAKeAIiAImAGeAEu@Ey@IkBG{AQiEKaCO}DEeACk@GyAMqDGyAG}AOgEAYE_AC_AC_@CeAAqBC{ACqBCaDCcFBuDF_HBsBB}BB}ADoDBcD@iB?{C?sBAiCAmACoAGwBEuAGaBEy@SsDK}AK{AI_AKoAEe@Ea@MkAK_AIs@Iq@M_AOiAKs@M{@Ga@Ie@]qBQ_AWsAMm@a@eBWkAS{@Mi@Qq@YeAQq@_@qAUw@]eA_@iAWw@Sk@i@{AUm@m@}Ai@qAYq@]y@_B_EYq@_A{Ba@aA_@aAk@wAQc@Qa@ISM[Qe@Qc@Qe@Yw@Uo@Qg@e@uAe@yAk@iBK]Ma@Oi@Qm@_@sAg@kB]sAWaAQq@GUEQQu@WkA[{A]_BGYIa@Mo@a@uBSiAIe@Ie@G]Ie@Ii@EWG_@Ii@Ik@Ga@c@{CGc@Ge@K}@OqAMgAMiAOwAQeBMwAQ{BMgBKyAKaBG_AGgAEy@Ci@IgBIsBGyAKeCScFQiESqEOsDE_AEcACm@EaAIwBIsBCk@E_AG{ACy@EuAEgAAWCu@Cs@Ac@Am@Ag@CiBCwBAuAAgBAgB?gB?aB@kB@cABsBBgBDuBF}BBw@BaAFcBFcBFmADw@NoCDq@F}@HqAHgAHkAL{ALwALuALuA^cE`@uE^gE`@sE^iE^gEVyCLaBJwAHiAJ{ALoBJoBDu@Dw@FqADaADgABy@@_@@[D{ADoBDmBByABcC@iE@qGAuAAiAAeAAw@Am@C}AEeBEuAGkBGkBIyBCk@E}@KmBKgBIqAQeCGy@Gu@OgBMuAKgAIw@g@{EOuAW_Ce@}DGm@K_Ai@aFUsBe@cEgCsUy@wH{@}He@gE{@gIe@kEg@kEoAkLoAuL_AmIa@{Dg@eEg@{Eo@wFYgCMmAIs@W}BMiAg@sEUwBe@kEMaAW{Ba@wD]uCi@gEo@}Ey@mF_@_CcAkGi@qDg@sCy@mEWwAUsAO}@My@U_BQmAM}@Io@K_AMgAKeAKgAMyAKqAIoAKsBEu@G_BE_AE}ACqAE{BA_BA}A?oB@gBBgBBiABgADyAHcCFwAJmBNuBL}APoBRqBRcBTeBTcBT_BTuARkAVwAl@wCt@eDn@sCpAwFl@oC\\_B~@_FVyA`@kCVkBVuBLiAPgBPoBJsALmBLyBFsAFaBHoCDmBBoB@wA?}A?oCCqCG{CGgCKcDK}CGmBEuAEsAOwEIwBGsBGiBGuBIcCKeDM_EK_DGqBE{AEaBCuAAgAAsACqE?}E@_C@eC@sBB_BDuBDyAHoCFiBHsBHgBJoBJeBLmBPaCXiDRwB^kE^iE`@}E^wENyBHwAHwAJwBNgDDgADgA@c@@i@DkB@]FyCBwBBsC@kC?oDAyCAyBCkBE}BEuBIcDIoCCcAAa@K{CWkJCw@EsACw@C}@EiBEyBC{AC{BAwDAcF@wF@qL@aF@gN@eF@gH?sA?wA@aD?sI@sD?sAAwBC{CCkBCuACiACcAC_AEwACy@Cu@GwAIgBIeBIaBKsBOsCQcDUyEUaEKuBKwBKwBEaAEcAEoAEuAEaBEoBCuAA}@CuBA}AAcB?eB@kC@oC@kB@oAB_BBsAD}ADuAFgBDiAF{AFyAH_BHwALsBJ_BLeBNoBL_BJkALqANwAP}AP}APuAPsAPqAR{APsAT_BZwBT}AVcBTaBR{ALeALgALqAJiAFs@LaBJ_BHsADw@FsABk@@WBq@Bq@Bu@D}B@o@@qABmC?m@?cACkBAeAAcAEiCCkBEuBE{BAe@CaAGiECcACqB?{B@mAAm@?iBD}EBcBDkBFiBNiDFoADw@JiBNsBNmBN_BPgBRgBTmBTgBVgBPeALw@RmAX_B\\gBRaAR_ATaA\\{Ab@eB^sA^qAf@aBj@iB^iAd@sAh@yAh@sAj@uAp@}Az@iBf@_Ab@y@^w@p@mAn@eAx@wAd@s@^k@p@aAz@iAt@_Ar@{@hB{Bx@aAt@}@nBaCz@eAr@y@p@w@l@u@`AkAv@_ApA}AVYv@{@rB}Bv@eAp@}@t@}@x@cA|@eAz@gAn@s@~@iAv@}@v@aAx@aAv@_A|@gAt@}@lB}B`AkAt@}@nB_Ch@q@`AoAt@cAjBmCp@eAt@kAt@kAr@iAr@kAp@kAp@mA`B{C`BeDl@kAn@oAl@oAn@oAXm@r@wA|@eBn@qAzAyCdBiD|A_D|A}C~AaD~AaDzAyC|@gBh@gAb@_Af@gAl@sAt@eB\\y@b@cA\\y@Zw@Vo@`@eAb@mAl@_Bh@{Aj@aB`@mAb@sAf@_Bz@uCZgAp@}Bb@_Bl@}B`@}A`@aB`@aB`@gBXmAZyA`@mB\\cBd@cCz@yETsAV}AXkBp@oE^iCVmBl@yERaBVuBTgBRaBTgBTgBXyBNeATkBTkBRaBRgBNuAVoCLsANgBNiBPwBZqENsBJgBHyAJ}BHmBN{DHaCFkBFuBDmBByADkBD{A@S?OBkBDmBJwEBmBDkBDmBDkBBmBDkBJyEDeCJaEHkBFkBFoAB[LmCHgAJiBReCHoANgBPiBPiBRgBTsBP{ATeBTeBn@iEr@qEVuAv@aEz@_E\\}A^}A^{A`@{A^{A`@{AbAwD^{AbAyDt@yCJ_@`@{AbAwDbAwDj@{BV}@hAgEXkAbAwD|@{Dz@}DZ}A\\_BZaBX_BXaBX_BLy@Hi@TaBVaBT}AR}Ad@uDNwAPuALsANqAXaDXcDRaDJsAFcAJiBF_AJiB@_@FcANyDNaEJeEBcBDcB@eBBeB@eB@gBBmEBiB@gBBgBDiBBgBD_BTiH@WHgBHgBJgBHgBHiBLgCPqDTqEJiBHiBTsERuERqFFuCFgDDuBBkBBuC@wB?uB?eDAyBCsCAwBC{CA{BCkBAcBCcCAoC?qE?mC@sB@}ABmABsBBaBD_CDaBFkBFgBF_BDiAFsAHsBN}BL{BL{BHcANgBNmB~@qKd@oFFa@D[TuCV{Cb@yEJoAPqBJcBLsALcB\\aEBo@D}@RqEPgERgFFsBFcDDcCBeB@iB?_@@mC?wEAsB?WCqACeBKwDIwBIiBKeBKgBSoCKgASoBg@mEIo@CME[E]AKG_@EWUqA]oBY{AQ}@SaA_@aBWcAa@yAWcAY{@[kA]iAc@sAk@aBq@kB[{@Ys@a@eAWo@k@uAmA}Cs@cBoA_Di@yAg@qAg@mAoAcDqAuDgAiDc@yAe@cB}@oD_@{A]_B]_BY_B[gBW{Am@eEUcBGg@K{@Q_BGq@Iu@KoAIcAG{@Gw@Eo@Eu@Eq@Ey@Cm@EiAEmACy@EaBEqBCiBA{AAmD?SBoC@}@BaB@u@DcBFeBFiBHgBJiBF_ADg@\\mENgBRcBZqC^{CTcB|AiKLy@Js@d@yCXgBXeB`AgGZmBTwA^cCNcAV_BZmBn@}D^_C^_Cb@oC\\uB\\uBp@kEf@cDv@eFl@}Dh@eDf@}C`@eC|@_GlAkHzBqN~@mFdAcGr@_Ed@kCvAkIdA}FbBsJf@uCx@sEr@aEX}AF[h@qCh@uCd@eC^mB\\eBb@uBd@yB`@iBf@wB`@cBNo@Ry@\\uAb@cBZmAZkAV_AV}@V{@\\kAz@wCX_Ap@uBHUlAsDnAuDd@qAh@yAh@uAdBoEdAiCr@cBv@gBbAyB|@oBlAeCXm@f@cA^w@lBoDh@aAb@u@fAmBdByCjAoBpCoEl@_AlAiB|IsM`CkDzFuItCoEpAsB`C_EbBuC~AuCn@kA~A}CdBiDlB{DzA}Cn@uAj@oA`@y@b@_Ap@wAvAyCpCcGtAsC`BgD~BwEbDiGdByC|@}A`BoCxBmDnAoBjBsCnFgInDiFlAiBdD{EhC}Dz@sA~DoGfBsCfCsEvAiCfBeD|DcI~CaHtBcFtCeHzA{DjEwLdDsJlBgGlCsIlCeJhByGnBwH`BaHx@yDhCeMtAuH`@aCt@sEl@{D`AwGl@oEXuBj@cElDoWj@gEp@_Ft@uFdAyH|@{GVsBRcBRkBN}ALsANcBFu@HmAHsAFeAFqABk@Bo@DsABeAB{ABcC@oC?{CAqBGyDEiBI}BCk@Ew@IwAMsBMeBOgBMqAMkA]wCOmAM_AUcBWgBQkAaAwGgAsHWeBe@cDy@oF]aCU{AiB_MYkBg@cDKw@mAkI]aCeAcHqBaN_ByKg@cDKo@{@wFq@cEkA{GmAqG_@iBqAmGUgAk@gCc@kBc@gBkA{EaCkJ_BgGaBcGaBoG]qA_AyD]{Ac@iBu@mDqAsG[eBq@}DW_BWeBk@}DUeBS_BSaBScBW}BQaBa@cEYsDKaBMeBWkEUqEYiHMkEKsECgBCeBAiBAeBAiB?kGBsCBsCBaCHqEFsBJeDHyBJ}BJqBH}AJgBZkFh@aHn@oHZcDX}CfAgKZmCd@uENsAh@kFBUBSBSD]D_@BUBSBSDa@D_@LoAHu@JcAHu@Hw@J}@Fk@Fk@Fi@BUBSHy@Fi@D[Fe@Fi@Fi@BUHq@Fi@Fg@Fi@LeAFg@Hq@LcAHq@Fi@D]Ho@R_BHq@Fe@PmAn@_F`@uC`A}GJq@RsAJo@Hg@N_ALw@Ly@Hg@Ly@F_@Ny@ZoBl@uDVaBDWRmA\\oBHe@Jk@TqAPcAToADWDWZyBn@eEp@aEJs@XcBb@iCTmAr@uEn@aEHc@N}@f@{C`@gCp@aEn@{Dp@kEh@iDb@qC^eC\\iCh@eEj@uEd@}Db@cEb@kETwBJaAFm@f@_G^wE\\kEZcE\\kE^_FJsALaBXsD^_F\\gE^gE`@gEb@eEb@eEd@eEf@eE\\oC\\uCd@aEf@gEd@_Ef@aEd@{Dh@uEb@wDf@gEb@kE`@mE`@oE^oEf@uHXkEViETiERiENkENkELkEPsHHmEFsD?[DoE@iB?o@@aD?qEAqECsECsEEsEMiLIqEGsEIqEGqEEuBEaEIkECcBGiEGgEEcBKkHGgEGiEGiEEeBCeBK_H?SIqDCeCKoEEgBMoEGiBQoESqE_@{HYsEMgBAOOcCG}@_@qEo@yHa@oEe@mEe@mEg@kEi@kEi@iEi@iEi@kEi@mESeBQgBg@mEc@oEa@sE_@sEOiB[sEYqEGmAGoAIyAGgAI{AKyBGeBGcBGqBEiBEkBCcBCuBCkBAeBAkB?qA@wA@yA@_ABmBDmBDcBFmBHmBHeBJkBHqAHeAJmAN_BRiBReBTkBPuAPoANaAPgARmATkATkAXuAXuANq@TcAXkA`@aBV}@X_AVy@X}@X{@Ts@Tq@|@gCtAmDvAiDzAeD|AcD`B_D`B{CxAgC~@}Ar@kAhBsChBqCt@cAnBkCnBgCnBcCjAuAf@m@h@k@PQt@y@DEvB{BhAiAlBiB|@y@zBsB|BqB|@w@~BmB|BmB~@w@j@g@pC{B~BmB|BmB~BmB|BkB|BkB|BkBzBiBxBiBzBiBzBkBxBmBz@w@vBsBtBwBrB}Bv@eAt@_At@cAt@gAfBqC`ByC|A_DvAeDrAiDxAkEHWt@aCZeAd@mB^{AZ{Av@yDp@_Ev@sF\\wC`@mENgBLgBLeBFgBHgBPqENoEVyHDiBHiBPwERwEXyEFy@T}C^wEd@sEh@uEj@qEn@oEXcBHg@P}@\\kBVyALo@f@cCLo@PaAz@}Dz@wDvAqGx@oDv@kDpAcGt@gDh@cCXmA~@aErAiGNu@Li@\\_B^iB`@sB|@{E\\kBVwAXgB^eCXsBXuB\\mCd@wDh@yERqBRsBNgBP{BP{BRoCTeDN_CDq@PqCTwDVcEZcFViEViEZ{EPmCPeCPeC\\wEZiEXwDZ}DZuDXiDXmDh@iGVqCZwDRqBPcBh@yFn@gG^uD^yD`@}D`@}D`@_E`@cEb@cEb@gEb@kEb@kEb@gEb@kEb@kEb@gEb@gEd@eEf@cETaBT_BT_BTaB`@cCL{@He@D[F[X_BXaBr@}D`CwMlA{Gr@}DRoA^mBX_Br@_Et@_ElA_Ht@eEt@gEr@iEr@iE\\aCRwAd@sDZ{BJy@NgAPiANgAXqBXmBT}AZqBRsA@KR_BVkBVcBj@iEVeBh@iEReBRgBRgBVsCPuBFq@Bg@TkDFkBNaE@QB_AHsCFuE?wE?kBCkBIwEKeCASA_@A]QsEWsESsEEcACg@IcBIgBIgBEoAAWGgBGgBEgBEgBC_CAo@?a@AsEBsEBkBLsENsEPuEJiBHkBVsEXsEFcA@QN{BXoE`@qE`@qET_CLoATwBJiARmBRoBTeBRcBF_@NeAf@gDVyAZeB\\gB^iB^eBXmAXkAZmAZiAZgAV{@Vw@\\aAZ}@Rk@Xw@\\}@Vo@\\y@\\y@b@aA^{@d@cA^w@f@eAd@aAf@eAlDcHpDoHl@mAd@aAf@aAb@}@d@_A\\q@l@oAj@iAd@_Ab@{@f@gA`@y@`@}@Xo@Vm@\\w@b@gA^_A\\}@\\}@b@kA`@kAZeAZcA\\kA`@wAVaAXiA^aBXmAXsATgA`@uB^oBZiBTsATsAZqBT}AXaBVaBb@kCV{ARoAVyAToATmATkAZ{ATeAViATaAXiARw@Rs@Lg@V}@`@oAZ}@\\cA`@mA\\_A^cA^_A`@aAd@gA^y@^y@h@gA^w@h@cA`@w@NWTe@f@}@h@aAf@{@f@{@f@{@`@s@`@q@t@oAlBeDb@u@f@}@d@{@d@}@f@aAd@_Ab@}@b@_Ab@aA`@_A`@aA^aA`@gA^eA`@mA^iA\\gAZgAXeAXgAVeAVgAVkATiATiARgARiAPeANcANgANiANmANsALmAJgAJkAJoAJsAHoAFkAFoAFuAF_BFqBRcHD}AD{AD}ADyADwADuAFeBFcBHcBHyAHqAJyAL_BLwALmANsAPwAPqARuAPkARmAHe@N{@TmATiATgAViAVgAZmAZkAXcAZeA\\iA^iA`@kA`@iAb@kA`@gAb@iA`@cAvGkPf@oAf@qAb@iA`@gA^eA^gA\\cAX{@X}@ZeAZiAVaAh@uBR{@j@oCp@iDN{@PcAL{@L{@Fc@Jq@RsAPsAPsAX}BR{AVmBTiBZcCf@{Dh@kEZmCX_CX_CZ}Bh@cEf@sDx@oGPsAL}@TgBd@mDd@{CPoATuANaALq@TkAXwAR}@TaAb@iBb@cBZiAV}@\\iAX{@Tq@\\aAVq@Vq@Tk@Xs@Xs@Vk@\\w@r@}AVk@b@}@b@{@d@}@f@_A`@u@^s@d@{@vDaHnF{J\\o@pNwWf@_A`@u@x@{Ad@{@b@y@b@y@d@}@\\q@Te@Tg@Vk@Zs@L[`@aA`@cA^aA^aA^cA`@kA^kA\\iA\\kAZiAXgAVeAXmAVmAVoATkARkARkARmAPkAPqANkANoANuANyALwAJsAJ_BH}ADs@DgADmADmADmAD}ABwA@{A@yA?sAAwAAwAC}ACwACsAEuAEuAGuAIwAIuAKyAKqAKqAKqAKqAMyAwA}OMwAKqAK}AImAGaAIyAGiAGwAEcAEuAA_@CmACcBA{A?_B?iB?oA@kABqBBsAD{ABaA@]FqAH}AJ}AJyAJsAJmALsAH{@Fk@J_ALcAPsARuARoARmAPcAHk@RcANs@Ns@R{@H_@Je@ViAT_AZkA^sAZeA^kA\\aAb@mA^cAb@eA^_Ab@_Ab@_A`@{@`@y@b@}@n@sAb@_ApC}FfA_ClAeC`AqBZo@^w@^w@d@cAb@aAb@aAb@aAd@eAh@mAb@cA^{@Zs@Vm@\\w@`@_Ah@qAd@iAb@eA`@cA^_AVo@^_Ad@kA`@eATm@Xu@Pe@Tk@Tm@\\_Ab@kA`@iA`@iAb@oAd@sAb@oA`@mAb@qAd@wAf@{Af@}A`@oAX}@ZaAb@uAb@wAb@wA^mA^mA`@uA^qA^qA`@wAf@gBd@aBpE_PpKo_@zFmS`@wA\\mA^qA^qA\\mA\\oAZkAZmAZmAZmAZoAZoAXkAZsAVgAXoAXoAXqAXwAVoAVqAVuAVuATqAVyATsATyARqARqATsAPqAPsAPsAPwAP{APyANuALwANyALqANaBLuAL{AL}AJwAJwAJ_BJ_BJgBH}AHiBFwAF{AFaBFeBDwADqAD{ADcBB}ABwABcB@aB@}A@aBBaB?}A?aB?{ACaBAaBA}AAaBC_BCeBCwAE}AEyAE}AEuAEkAEcAEeAG}AI_BIcBI_BI{AI}AKcBKaBK_BK}AO{Bu@mKa@wFWeDEm@IaA_@yFQcCMiBK_BK_BKeBIyAKgBKuBImBG{AEgAEgAGeBEqAEyAC{@CkAC_ACoACyACkBAoBAkBAcB?wA?wA?{A?}A@}A@yA@{A@yA@kABcBByAD_BD_BDyADsABs@DiADmAFuAFwAH_BHuAH{AJcBLeBFo@D{@Fy@H_AF_@HkALaBN}A^_EP}AJ{@N}AD_@f@wDZkCHm@XgBPmADc@b@mCNu@p@gETsATqAVsAXoAp@kDXuAZuAx@kD|@mD\\uA^wA`@wA|@gDb@{Az@kCv@cCXy@\\cAXy@`@iAf@uAv@qBjAyCtBaFxB}E|ByE`CsEj@eAvAiChCgEjCcE~AaCn@{@tCyDd@m@|@iAfBuBdBwBhBmBjBmB`D}CjBeBv@q@lBaBv@m@hDkCfDgCfDcClA{@fCeB^WlCmBbD}BdD_CbD_ClByA`DkCnB}AlBcBrBmBdBcBjBkBjBqB|CoDzCwDdB{BbB}BjBkCPWT[pCcEpCeEnCeEnCgEnCeEnCcElCeE~AaC|AaCrFaIdEuFvCsDpEgFxE}EdD_DhDwCrBaBnDkCnDcCnD}B~BwAr@c@dDmBvDwBhFuCxCcBdCuAhBcAjBeA~BuAbAo@rA}@xAaAbBiA|AiAxAgAtC}BhBwArBeBvCaCzBiBdByAb@]d@_@v@m@p@i@j@g@h@e@\\[x@q@`BuAvAiAdA{@fA_A|@u@x@q@z@s@xAkAfA_AhA_AvBeBdBwArAgApAeA|AqApBaBdA{@l@i@z@w@p@m@z@w@vAsAbB_BpAqA`AcArAwAj@m@f@k@`@c@VYZ]dBqBx@_AdEuE~FyGnDaEfDwD|@cARSLOHKx@aAh@o@hBwB|D_FvDeFdA_BfBqClBaDt@mAj@gArB}DxBoEhAmCdBaE`AgC~@cCpAyDlAqDt@iC~AoFbA}DxAmGPu@hByIpByKrAiHHa@bCmLH_@l@mCz@iDp@qCvA}EnBkGzBuGfA{CfAyCdDaJxEsM|CsIvA}DzEwM^cAlBiFfAyCN_@`@oAj@}A~BsGfCcH`@iAn@cBt@sB~@eChAsCr@iBRe@j@sAVm@^{@~AmD|@iBt@yALUP]l@iA~AsCrA{B|AeC~BkD~@qA|AqB|AoBfCyCpByBbBeB~A{AZYnCaChB{AxDqCpCmBrCgB~DyB~C{A|CsAvAk@fAa@xBw@hEoAfEkAtFuAhEaAnAYzA]v@QnCWz@KbAMLApACzBBnAHb@BpBDf@Af@GnAS\\Kl@]b@]^_@X_@x@oATe@`@mARw@N{@RyBB_A?aACcAG}@[yBQy@Ww@[u@[k@g@o@Y_@a@a@c@[k@Wk@Qg@Ki@Ei@?k@Dg@Hi@Nk@Rg@VoAz@oA|@a@XwB`Be@ZmAr@KDcAb@i@Li@Fk@@g@Ai@Gg@Om@W]Sa@[i@g@[a@]k@Yk@k@eBe@oBu@}CS_CEm@MeDAOC{AC{AKyGAw@GiFOiMYeWUeSGkFEcEGeEE}BAk@CiCGsFGwFEeEKsIEyCEaDMiLGcEOgHUiH]cHWaEi@cHOaB]_DWaCIm@OeAc@mDeA_HW}AoAwGy@yD_BsGcAuDIWg@kBs@wBqA}DmAkDq@eBg@qAa@_AMWeCqFgAaC{@_BoAaCQ[s@kAk@aAg@y@{@qAs@eAm@{@o@}@g@q@c@k@]c@s@}@aDyDw@{@a@c@]]m@m@sEoEk@k@iAeAq@o@sAoAoAkAeAcAw@w@[YsBoB{@y@u@s@sBoBo@k@a@c@q@q@aA{@_@]GEGGw@w@e@e@gDgDmBsB}CqDeAsAcB_Cg@s@]i@]i@U_@[g@Yc@OUyAmCeCwEsAsCqAyCmA{C{AgE_@gAQe@Y{@]gAu@iCgAgEiAyEUeAQy@_@gBcAqFSkAUoAQgAOeAMgAOkAMcAMiAK_AK_AKaAMsAMuAKoAKyAKcBMuBM{BKuBImBGkBEiBCqAC_BAcBCsE?wB@mD?g@HqED{BVkH^kHz@oNTcEPeELeEFeDDcD?[?mCAcBMuHWwGi@yHa@iEe@eEm@aEq@_Ew@yD}@wD]yAaAqDiC_JcAqD_AsD}@uDq@aDs@kDq@qDs@kEIm@k@gEu@sGO{A[yDc@uG]uGMyDQ}FMsEOyDE{AOyD_@uGe@sGm@uGk@aFo@_FaAgGuBuLeAeGk@qDk@qDg@sDe@uD_@mDO{ASmBMqAi@uG_@uGQwDOwDQqGGuDCyACwD?qD?_A?}BByDDyDJwGJyDTwGLuCBm@H{ARmDJ_BJ{APaCRcCL{AJiAPeBN}ALqAP}AXcCX{B^mCZ{Bn@cEJq@N_A`@{B^sBd@aChA{Fr@eDt@gDt@gDl@kC`@eBVgAViAR}@RaATkAVoAV{ARkAPmAPqALaAJ}@LkAFo@Fu@JwAFeADs@HaBFwADsADcBBcB@aB?cBCcBAwACwAEkAEgAEaAGgAG_AGcAEk@Eg@I{@U}BEc@_@yCUyAg@mCY}A{@yDcAuDgAmDoAiD_AuBcA{B}BsEuAmCiCoFmAyCo@mBo@uBk@{Bg@}Bc@cC]sBIg@UsBI_AUoCIcASqEGkCIqIG}FQyFM{BOyBWkCc@oDo@yDa@sBS_AgA_Eu@_C{@aC{@cCm@}AuByFaBaF_AyCI[eAqDi@{BQ{@I_@i@cCa@yBo@uDSsAg@sDc@sDW{CUmCWaDa@{GS{DK_BSaDOwBM}Aa@yD_@{Cc@gCq@_Ey@{D_AuDcAiDeAaDw@wBe@mAs@yAq@wAISg@_Ao@kAiAgBcA_BiBcCi@q@s@w@kBmBkAcAe@a@u@k@WSi@c@uGqEcC_Be@[]Ue@[WQmBqAoA}@s@i@oB{A}BmBk@i@iBaBu@s@w@u@eAgA_A_Aa@a@cDmDwEgFyEeFsGsGoBkBmDyCmDqCqDkCuBwAuD_CwBoA}@e@{C}AyAu@u@[i@WaAa@iEgB}@]{@YwAc@IC_AYyEuAcCo@SE_@Kc@K[I}FuA{EgAyGgByJaCoCq@gFoAyC{@m@Qi@QyBs@sAe@sAe@yAk@y@]}@a@y@_@{@a@yBiAwBmA{@g@}A_AaAo@}@m@{@m@w@k@cAw@}@s@_BsAiAaA}@y@w@u@w@u@s@s@u@w@q@u@w@{@u@{@{@cAsA_B_AmAa@g@i@u@o@{@i@u@o@_Am@}@o@cAk@}@cAcB{AiCuAgCqAgCs@sAu@}Am@sAq@_Bs@}AuAeDcAkCkAyCoAaDgAsCoA}CgAqC}@yBw@mBaAyBu@cBqAqCgAyBw@}AiAuBy@{Aq@mAo@gAo@eAo@eAa@o@y@oA_AwAeA}AwAsBcCgDkBgC}CaE}AsBoAeBy@iAuAmBqAiBwBaD}AcCkAoBcAcBmAuB_AeBmA}B{@cBoAiCu@yAmDuHuEcKkDoHsAwCu@aB{BmEwAkC{AqCmCwEaBkCyA{B}C{EoC{DeEsFkEmFuDgEsByBq@s@s@s@eAeAw@u@}@{@i@g@{@w@cA}@}@w@q@k@w@o@{@q@e@_@WSSOYUmAcAeBsAiF}DiEiDqEiDmDoCwE{DqD_DaBwAaHiGwDsDgHcHcGoGqEaF{FuG}CsDsG_I{CuDgFeHgA{AqCsEoCwE{@aBeDyGwB{Ee@kAqBaFgA{CaBuE_@cAIWeAqD_AcDu@_Dk@wBs@qCu@mDeB}IcAiGi@oDuAsJuCsTu@oFeAqGoAcHu@oD[wA{A_Gy@uCeAeDw@yBaBaEoAwCcC}EyAmCuBgDkAeBa@m@a@i@gC}CqCwC_C{BcA{@_DcC{BwAwBqAwDoBwDiByDgB{BgAmDiBaE_CeBkAsB{Ak@e@cBwAiBaBoAkAw@w@k@m@k@o@e@i@c@g@u@{@aBqBgCgDOQ_ByBuCcEaBcC}BiDkAaBcBcCyCcEsBoCgEaFcDmDkDkD}AwAeCwBeDiCsDkCy@i@uBqAqDwBuDmByDgByBcA}B}@_C}@}D{A_EyA_C}@aE{A_E_ByFiCoDgByBmAqEuCOIiC}AuB{AsB}AmDsCgC{BwAqAsDsD][s@u@qAyA}CoDgByBsCqDy@iAsCeEoCcEqCmEmAiBiAeBsAuB}@uAu@iAu@iAw@iAe@q@e@q@_@i@]e@c@m@a@i@a@i@a@g@a@g@a@g@o@u@q@w@o@u@iBsBkAoAaCeC][eCaCaByAk@e@WUMKuAkAe@_@i@a@s@i@m@e@{@o@u@i@}@o@qA}@kBoAcDyB_C}AiCcBUOYSgBkAmDgCmA}@kBuAmCwBqCcCiF_F_CcCqAuAuBcCoA{AwBmCkA_BsAiBeAyAy@mA[e@eAaBkByCmAsBmAwBcAkBs@oAkA}BiEaJ{A{CoAiCmDqH_D{G{BuEcIuP}GoNuCgGwDyHmBaEwCgGuA{C}BkFqBeFsAqDkAgDiAiDgAmD_A{C]mAi@mB]qAm@}B_@wAYkAk@_CWgAUaAq@aDu@oD_AwES_AaCmM_@mBeAsFs@qDs@kDcAyEyAaGcAuDeBaGkAqDaAsCq@iBaBkE_A{BgD{HqCaGsAqC_BeDWi@u@}A_CgFmAoCYq@cAeCqAiDiA}CkAmDgB{FaAkDa@yAs@qCg@sB}@aEg@aCa@oBc@_Cc@cCw@{EoAyHiAoHwA_Jk@oDc@cCq@oDw@yD_AeEy@iD_AuD{@yCaAcDcAaDo@kBcAuCaAkCaAaCoA}CeA_Co@wAs@}Aq@uAo@oA[o@e@_Ay@_B_@s@i@eAo@mAi@cAm@kAo@mAq@sAo@oAq@uAo@sA{@iBo@wAi@mAo@}As@eBk@yAg@qAm@aBcBcF_AyCo@wBi@kBk@uBm@aCe@kBa@cBa@gB_@iBg@eCa@sBq@qD[eBm@eDa@cCc@aC_@wB_@qBYwA[{A[yAWgAWgA[mAc@aBc@}Ac@wA]eA]cA]cAe@oA]}@c@gAe@iAc@cA_@y@]u@a@y@g@aAc@y@e@y@i@_A_@o@Ye@S[mAoBcA}AkBsCiBsCuA{Bo@iAk@eA}@gBu@aBs@}Ae@iAk@wA_@cAq@mB]cAm@mBa@sAq@_Cm@{By@_DkBkHWaAs@kCm@}Bc@cB[mAwAuF_AoD[mAYeAYgAYiAi@sBk@wB_AqDgAgEGS_AoDWaACK_BgGuEuQ{DiOgCwJc@_By@eDc@aBk@uBm@{Bm@uBgAgDe@oAkAqCyAyCm@iAsAwB{AuBy@cAy@_A_B}A}@y@s@k@}AgAsAy@qBcAsAi@w@Yy@WaAWaCe@_AM}@KiAI_AEaACqA@qABsAHqCT{BRwDZqCNiABwB@kAAy@CuAEiAI_AI}@Io@Ik@Iw@M{@O{@Qy@Qy@Sq@Qi@Ok@Qk@Qm@Sq@UoAc@oAc@kAa@iA_@{Ag@yAe@y@WiA]{@Wq@Sy@U}@Uq@Og@Km@Ma@Iq@M{Do@kAQk@Ie@G_@Em@GqAK{@Gs@EsAGiAE{EGgC?gCBqBByAJkEXkEd@oC^wATwAVu@NgB`@{A`@iAZuA`@_AZ_AZaA\\_A\\{@\\y@\\u@\\s@\\aBv@sBdAo@\\_Ah@kGrDiC|AsFdDw@d@qBdAeCnAqBbA[N}BbAsBt@kC~@aCr@aCp@_B\\eAT]Hs@LqAVcC^s@JgANoBNs@Fy@F}@Fu@DsAFyADwABcB?uA?aBCoAC{@CgAEyBKyBQa@E_@E]E{@K}ASuAScC_@wB[gAQm@Kq@Ko@Ks@Mo@Ko@KaBW{@MuEo@yC_@mAO}BS{BOoAGiBGyBE}@?mAAs@AeA@i@@}@B_CJqDJS@oANuC`@uAN[D_BTcANc@H}Ex@eAPuB\\yB^mATaAP}B^oCf@uB\\mGdAkBViBV_BPu@HuALeAHeAF{@Do@B{@By@Bs@@aA@aA@_A?{@AmAC}@Cq@CcAEkAGq@Ey@Gs@Gq@Gk@Gq@Iq@Im@Iw@KyAUq@Kq@KkASgAQ_AO_AOaDk@wAUm@Kq@Ko@Kg@Ik@Im@Iq@Is@Iy@Is@Gy@Ga@CWAk@Cu@Co@Am@Ai@?a@@g@@e@@g@@e@@a@@i@BU@_@B]BYBYB]Ba@Dc@Fe@Fi@Hk@Ji@Jg@Jk@Lq@Nk@Nq@Po@Pk@Pk@Pi@Pk@Pc@Nc@NoE|Ac@Nc@Ne@Ni@Pi@Pi@Ni@Ng@Lo@Ni@Jo@Lm@Jk@Hi@He@Fq@Hk@Fo@Fi@Do@Dm@By@By@@y@?y@?kAA}@A{@Cy@Eq@Ek@Ec@E_@Eg@Go@Iy@Mu@Mm@Ks@Os@Qe@Mi@Oc@Mk@Qq@Si@Qe@Qa@Og@Se@Sm@Wo@Yq@]s@_@aAk@k@]i@]oBqAcAu@aAw@m@g@m@i@k@i@a@a@c@c@g@g@c@e@{@aAo@u@cBuBkBeCsBsCaByBc@m@_@g@g@m@e@k@c@g@g@k@c@e@g@g@e@e@k@i@e@a@k@e@m@e@g@_@i@_@WQe@Ys@a@o@]m@[u@]w@]s@Ye@Qg@Qm@Sm@Qi@Oc@Km@Mi@Ke@Ig@Iq@Kw@Ks@IiDa@w@Km@Io@Kk@Kq@Mq@Ok@Oo@Qi@Oi@Qk@Sk@So@Wi@Uu@]q@]m@[m@]k@]i@_@o@e@q@g@m@e@k@c@o@i@k@g@k@i@i@g@e@e@a@c@a@e@c@i@e@m@e@o@a@k@g@u@e@s@_@m@c@s@a@s@a@s@a@u@Uc@[m@_@u@{BuE]q@Yi@]o@]m@a@s@a@s@Ye@Wa@_@k@a@m@a@k@a@i@g@o@g@m@e@i@g@i@e@e@g@e@g@c@g@c@g@a@e@][U_@Wc@Ya@Wc@Wg@Y[Qo@[_@Q_Aa@m@Ua@O_@Mk@Q{@Wg@Mo@Ow@Ou@Mm@Io@Iw@Iq@E{@Ew@C_AAgB@iABaAFiAJ{@JaANy@Nw@Pu@R_AVaAX_AXeAZqA^y@Ty@VmBh@cAV_ARa@Hm@J_ANeANmALq@FkAHy@DgADkAB{@?_A?}@Ai@A_AC_BImBO_AKyAUu@M}Ba@aAQe@IgAU{@OwAUeBUm@Ga@Ea@Ca@Cg@Ai@Ae@?i@Bc@Bm@Dy@Fe@BYBSB[Fw@Pm@N_AVa@Lg@Pe@P_@Pc@Rg@Ve@Xs@d@w@j@WRc@\\]Z_@\\YX[Zc@d@g@l@g@n@e@n@k@z@QVMRc@t@_@p@]r@c@~@a@|@Qb@Qb@c@jAo@dBc@lA]~@_@dAa@jAc@lA_@bA_@~@c@bA[r@c@`A]r@_@t@_@r@a@t@U`@k@~@g@x@]f@e@p@o@z@g@n@m@r@]`@_@`@a@b@g@f@g@f@m@h@URUR[VeAv@e@\\c@XwA|@eAj@y@`@uB~@_C~@{DxA}Bx@yCfAcBl@oCbAeC|@_A\\{@ZuFtBkC~@s@ToA`@u@Ro@ReAZm@PsA\\sAX{@PgARo@Jw@J_ALsAL{BNoBHk@BqABeBBoAA_BCkACo@As@Cs@E_AIqAMeAMaAMw@M_@Gk@KqCi@qA[qBk@eBi@yAe@}Ak@qB{@aEoBiDgBqBeA_CmAmDgBmB_A}@a@aAc@eAc@}@_@gAc@u@YuAg@sAc@cA[w@Uw@Uu@Sk@OsA[gAWo@MGAuAW{AWeAOm@I_AMo@IqAMw@Is@GkBOkBOwBMcCOgCQyAIeAGq@Eu@GcAImAKeAKkAMg@Go@Ig@Ge@Gi@Is@M}@O}@QiAU_B]gAW_AUu@Sy@U{@Ws@UiA_@k@S}Ak@cAa@y@]yAo@_Aa@eAg@kAk@s@_@y@c@o@_@qAu@sBoAs@e@iAw@gAw@{@o@eAw@w@m@g@a@e@_@i@c@{@u@o@k@}@y@cAaA{@{@o@q@s@w@[]o@q@s@w@y@aAcAmAkAyAgAuAy@gAc@m@i@w@_AuAeA_BgBuC}@yAeAgBy@{AuAiCe@_As@wAaAqBoAoCmAgCkAcC{@iBaAuBs@{A{@iBeBoDqAkCwAkCyAmCqA}B}AiCm@cAs@iA}@sAqAmBoAiByAqBiB_CiB}BmB{BuB_C_AcAsAuAqAqAoAkAaA}@u@q@y@s@s@m@yBiBu@m@m@e@}@q@y@k@aAs@q@e@mAy@cBgAkBmAwD}BoBgAkAo@oBeAqBcAeCoAsBeAmCoA{FkCuCoAqDyAmFyBkFkB}@[kDmAaDcAcA[sBq@yBo@y@Ua@KqCs@gIyBg@MgFkAaDq@c@I_@IkAUiCg@{AYq@MMCmB]i@Iy@Oy@Q_B]uAWiCe@qGmA_Cc@iC_@y@KkAM_CSqAK_AE}@EiACaCCeC@gCHiCNiCRmC\\{@LgCd@iAT}@T{@RsA`@}@XGB}Bv@s@Vo@Vo@VqDbBkB~@iBbAsBjAg@Zw@f@sA|@_An@kBrAgCpB{@t@cAz@gB~AcD`Da@`@]ROJSPSPURk@f@[Vg@Za@Ng@Ns@Bc@?i@G_AUuBg@qAo@mBy@aBo@WKsB_Au@a@MG[Ou@USISG?KAICGCAGCE@C@CDCF]KKE]Mm@UkAg@wB}@w@[WIUGKCMCWCUAW?S@UBMBUFQFSHWLSL[Ti@`@MHg@ZEIGGECEAI@IDOa@EMWq@GOM_@o@iBo@eBm@iBm@aBg@wAWq@o@_Bm@oAeAoB[g@c@q@eAwA]c@]_@{@}@mCoCwAwAkAkAsCwCwAwA_@a@eBgBeBeBsBuBIIw@}@u@aAc@q@a@u@_@s@Q_@KUO]IUQc@Oc@Us@Qk@i@qBYgAk@uBcFgReBqGOi@Qi@Qe@Ui@Wi@Wg@m@iAaCmEaUsa@yGsL{AoCIOMU]o@[i@oAyBc@aAe@eAc@iAUu@YeAQ{@Q}@YeBEUgAcHE[Ga@O}@i@eDgBcLe@sC_A}Fe@}CY_BMw@CSU{Ai@cDYgBYuA]mAa@iA]_Ai@gAa@q@yB}DOWq@kAk@eA[k@IOUc@oBmDQ]Ug@Qc@Og@Oq@Ko@Gk@Cc@Cy@?o@?s@?o@@gBBsA@c@@QDw@@WDi@TiCLsAL}A^}DDcA?i@Am@CSC[K_AYiBWaBw@iFi@oDKiAG{@EUKm@Mg@Qa@EGYc@MOMMw@{@}@eA_@a@SWU[]c@y@sAc@y@]u@Sg@Uo@Qo@Sy@UeAO}@Kw@Iy@G_AEy@Cw@C_A?}ABqBB}@Bi@@[FaBD}@DeABe@b@_KPoELoDHqB@c@@QP_EFwAF{DAkBG{BMsBYiCOeBCQEc@c@kDGm@e@eE_@iDaBqOGg@m@_GK{@Ee@QiBUsB_@{BgAsFI_@e@wBOu@WkAwB_K_E}QmC_M[wAg@wB]wA@OCOG_@Q_AKo@Ky@Kw@IgAEk@Co@Ag@Aa@?a@@kADqABm@F}@Dw@DiAHcDDgB@a@@g@CMDqA@[HsC@WZsJb@eMJ{BPyBJcANcAb@oCj@}CbAeFNu@P{@j@kDXiCRwCHgBByBAqAIqDOqCOeC]kFMqBCe@m@iKCg@KcBs@_LUuEGgCCuB@aCBmBF_CNyBDo@JuAHw@JcAPsAHk@Fa@N_AhAaHbAcGlAmHN{@XeBV_BVoBTyBF{@LgBJ}BDeBDyBH{F^_WNyJn@ac@FwDDyBBqBJkH@sCA{@AiAAy@AaDEaFAcAKmKBa@AaAA{AA{BI}GCuBAaAEy@EiBCyCGwG?c@?]KwFEeBMsCWuCWaCY}Ba@yB]aBa@{Ac@_BsA_E}AyE}CiJqCiIsA}DMa@qE}MGSc@oAM_@Sm@u@yBa@mAm@}A]y@[m@_@q@c@m@c@i@{@{@iAy@e@Yg@U]KMEYIa@Ks@KiAQaEg@aIaA}Ca@wAQwAQoGy@qDa@gBS_@Gs@KiAWcAWkAe@k@[MGYUg@a@o@k@qAuAmBuBmAuAaB}AeBuAa@YcCaB_@[g@a@qAiAgAkAaA{AYg@a@}@_@_AWy@[eA_@kB]iCQmBEu@CoA?aA@sADsAJmBVqBD_@RkAPeAt@kDd@yBh@eChEqSdCuL^mB\\wBRaBHgAHgBBeCAeACgAGoAKmA]iCUcBuA{Ja@sCKq@YoBg@sCWiA]oAi@aBi@uAk@kA_AcBw@yAu@eBm@eBW}@UeAe@iCE]UcBSmB[qCI}@E[_@{DMgAEc@OsAg@}EMeAAOEq@IsAE_A?s@?aB@g@BsAD{B?mAEiAGiAMkAQgAMo@WgAUu@[y@o@uAaAmB}@mBs@}A_@eAQg@CEK]Ww@s@yBw@eCYy@M]g@}ASk@m@}Aa@eAQe@u@uBg@gB[cACMQq@]yA_@qBCM]yBWaCOaBWoDIqBGsAEoBBm@?g@EyA?_@Hc@LUFQB]?QAOCOEOGMEGIMEMCKAGAIAMAYA_AE_BCe@Ky@Qk@[i@_@]a@QOCe@G_AI_AEUCYEUEMCUGMEQGQGSGSGKCu@OQIMGQIMG]OgD{AoAg@qFcC_@QWMq@YcAc@yAo@}CqAkAg@qBaAwAo@k@WwAm@wAm@uAm@uAm@i@Ui@Wo@[YMUKQIe@Sy@]SI_@OiAe@}Am@UIIGKIMIa@USIa@SSMKIMMKOIOKQKUIUI[G[E]C_@A]?]@]B]D]F]BMDQDQHWHUHSLWHOHMNUPUNSJOHMRa@RWrAiBT[fAwA`@k@f@o@~@oAx@cA|@uAj@}@f@_AbAmBp@{Ad@kAb@mA`@iAX_Ad@cBXkAVgALm@Nw@Ls@Jm@Jq@Js@Fg@Fk@Fi@Hw@De@Fu@Fw@Do@FiAHoBD}ABuC?mE?yCA_D?s@?k@A_A?[AqBA_EA}A?_BA}A?kCAqC?S?oIAoI?aD?cE?sA@iD@gCAsD?i@@_DAiD?_E?mE?eDAkCCmECuEAeDC}EAgBC{BAkDAcD?gDAmEAiGCsFA}DAkHAmF?uCAoEAcIA{DAkEAyEAeG?gDAmFAuDAaD?aDAmEAyFAeFAyG?uCAsEAsC?mB?cDAeDA{DAaH?wEAgFAaE?}CAwD?{B?yC?oC?qACw@?}B?eA@aB@cB@cBDcBDcBFcBFeBJcBJcBJaBN}ANkBPwAReBPyAD[L_ARaBJw@L_AL_AJu@TcBXsBDYFa@Fe@D]D_@Fi@Fk@Dc@BYB]Be@Be@Bq@@g@@g@?m@AeAC_ACs@Eu@Em@Gu@I}@Gq@Gq@KgAO_BwByUcA_La@mEOcBKgAIcAKsAIwAGwACw@CgAC{AAgB?qABoBFiCDkADkAHsBFgBFiBHsBHqBF}AFwAFsAF}ADoAR}FJwCBy@LgDLaDLqDN{DLsDF_BFwATyGHsBHmBNeEVwHf@sNHeCBq@D_AD}@Do@Do@Fs@Fm@Hq@Hg@He@Ji@Je@Li@Nk@Pk@Rm@Na@Pc@N]P_@R_@Vc@Va@^i@b@m@`@i@\\c@Za@\\c@fHaJz@gAr@}@f@o@r@}@V[RWPSTWXYVWXUXSZS\\S\\Q^Q^OZK\\K`@Kh@Mn@O|Cs@|@Sr@Or@Op@Ol@Mp@OpDy@vA[lAWz@Qz@Sn@Ol@Ol@Qf@Qf@S^QbAm@p@g@l@g@v@{@l@w@j@y@h@_Aj@iAd@kAVs@^qAZsATmARsAJw@De@Hs@F_AD{@B{@@w@?uACsACu@GgAEm@O{AIy@Is@Ku@Kw@Is@QmAMgAYgBe@sDg@sDGe@YuBUaB[}BKy@WmBWkBSwAUeBOiAMaAG_@Io@CSIo@Ik@Gc@EWE[QoAS{AYwBS_BYcCSgBUaCSiBWcCOwAO}AM}AKoAAGMoAOqBY}DUaDIuAOcCAMGqAS}DGuAG}AMwDYsKC{@E_CCeBAuAAiA@kCBwEBaAFkBFcBFqAH_BLcBL{AJmAN{ARaBRuAVgBF_@Ju@VwAp@kDb@iBRy@XcALg@Pq@bAaDHWp@uBfAoCb@gAd@gAFM^w@f@kA`AwBb@aAx@iBrAuCfAcClAgCf@gAr@}AZq@r@}Ah@mAh@iAhAcChAcCf@gApAsCbAyBlAkCjAoChAsC~@cC`@kA\\eAZcAh@iBf@aBh@qBZqAXmAVmAVoATkAVoAPiAXoBd@qCTyAb@oDZ_DXgDXqDRmDLmDF{AFyB@o@D}ABkAD{BHaDHiELkGHuB?q@?c@JaCDyAFqAFqAH{AH_BJgBHmAToCP{BLyAPmBHiAXaCTuBRaBH]ZgCT{AT{AT{AV}AV{AJk@ReAVwA\\oBLo@ZeBZaB`@sBNw@\\iBTkAVqAXyATkAVqAP{@ZaBVsA^oBVqAZeBVyAVyAVcBTyAT}AT_BT_BPwAP{ARgBLmAN_B^}DHeAJiAHcATwCZsEZcEN}BTqCPuBVmCP{A`@eDTcBh@uDh@yCf@eCT_ATeAXkAn@eCr@iCZgAx@mCz@kCz@gCz@kC|AuE|@kCdAcDZ_A~@uC|@qC^mA^sAXiAZkAZuAZoARcAXqAVoAVyAReAN}@PeATyAJo@RuAHg@d@{Cd@aD`@qCVgBd@sDT_CXqCRsBP}BNmBPmCVcERwCDm@H{AJcBLoBHoAVaDV_DJeANeBPkBRgBRcBTeBViBViBVeBXcBX_Bf@kCv@cERgAJi@b@yBR_Ah@gCj@mCn@uCn@{Cp@aDr@aDp@eDr@mD\\iBReAn@sDPeADUj@wDT}AR}AR}Ad@}D`@aE^aEZcEVeETeEPiENgEJeEHaE@aBB_B@_BB}DBwD@qD@sD@wABkDBiDBcDF{CFuCFqCHuCH{CJ}CLcDNkDPsEJuCF{ARuFDs@DmA@q@@YFyADiADu@D_AHgCPgEFcBNcEFaBB_B?M@a@?Q@]?[@cA@qB?mAC_BAm@Aq@Cq@Am@EaBI_BGcAO{BO_BOaBQ_BS}AU}Ao@wDY{A]yA]wA]wAa@wAc@sAc@sAe@sAg@oAg@oAi@mAk@kAm@iAo@gAo@eAq@cAq@eAs@_Aa@g@_BoBq@u@c@a@w@y@u@y@w@{@kBqBw@{@mBsBu@y@u@y@u@{@u@{@u@}@s@}@u@_ASY_@g@s@cAq@aAw@mAg@_Ao@gAm@iAm@kAm@kAk@mAi@oAk@oAg@qAg@sAe@sAmB}Fc@wAQo@Og@a@wA]sA_@_B]{A[{A[{AY}AY}AW}AU_BU}ASaBS_BQaBQcBUgCIaAMeBKeBKeBIgBGeBGgBEeBEeBCcBAaBAaB?}A?_B@_BFcEBcBDkBD{AFeBHeBJeBLeBLgBNeBNeBPcBPeBTcBRaBVaBVaBVaBX_BZ}AZ}A\\}A\\{A^{A^{A~@wD`AqD`@}A`@{A^{AbAuD`AwDv@{CH[bAwD`AwDbAwD`AwDbAwDbAyD`AyDbA{DbA{DbAwD`AyD\\}A^}A\\_BZ_BZaBXaBVcBVcBVcBV{BNoAPgBPcBNeBL}ANeCLeCLoCJgCDqB@y@B}@BeA@wC?iA?kAAkACyCCsACgACmAEkACkAKyCGmAAkAGeBEmAC}@CoAEcCCaBAwB@iEDmDFmCJqDJyBDw@RkD\\qEVsCNwAVuBRaBZyBV}Ah@cDp@gDt@iD^}Ad@gBx@yCj@mBf@{An@mBj@_BxAoDlBmEbB{DfAgCdAaCfAeCfAgC|AqDhBiEf@oA`@eA`AqCtAiE~@eDt@wCj@_Ct@kD\\eBh@aDp@qE`@mC^aDh@qF`@iFLoBPyDNaEF_CDsBDkC?iFAuDC{CG{CKcDKkCEaAQaDIoASaDOgBU_BSmB[sDiAyLQkB}A_P]uDO_Cq@{G[gDyAqOyAePcAuKk@aF]aCU{AUoAYsAWmAU_AU}@]oA{@sC}AuFuCkKc@_Bm@uB{@}CmH{WiAqEu@gEq@_Fi@_FQwBKaBKqBKyCEgDCkH?qR?uBDqi@?u@?eIAaIG}CKwDG{BQoCK}AM}AMeAOiAc@_DmBmLm@iDw@sEMs@mFo[e@qCc@eCuDoTuCqPgAiGMq@[iBe@qCcBkKEYQwAYaCa@{DM{BQiCQiFk@qPwAkb@s@wROkCM{AEo@YeCOsACQy@eF{@qEkBuImByIqDyPoCuM{AiHs@kDm@}Bk@sBoBkGwHsTyBuGoAqDwAkD[w@y@mBgF}LsB_FuAeD[w@Sc@a@qAk@iB_@qAUu@}@kDi@sCk@yCm@oEa@mD[_DsAoNg@qFcAeKEi@q@cHaF}g@o@oGe@{EwC{Ye@oE_AgHu@iE{@sDQq@Sy@WcAo@oBm@iBSm@m@}Ai@uAcAuBu@{Ao@oAUa@cCiDqB{CeAeBuB_EaB}Cs@iBk@{AK[o@uB]oAI[{@cDo@}Ck@eDQiAMs@K_AQmBCWKcA[wCKgAWaCIy@S}BSsBSmBGc@YoBg@gD_@kCCSAq@BCBGBM@O?MAQCKEKEGEEECGAG?G@GBEBGFMAOASCSCYKGC{@[aA_@o@Wk@Us@YqAg@aA_@_Ag@_As@k@s@KOKQKSO]Si@KYGQIWMa@Mc@i@kBqAmEW_Aw@kCiA{Dk@qBm@sBi@cBi@gBMa@IWIUM[KUMWMUS]k@{@m@{@g@s@y@iA_E{FeDyEU[Y_@Y]c@g@s@w@_CgC{AcByAeBiA{AeCgDcAuA_@e@g@o@c@i@Y]Y[e@g@_@_@u@s@gEyDi@i@c@e@_@g@_@i@[m@Yo@Ws@Su@Sy@O{@O{@Y_CM_AMaAO_AS}@W{@Yw@_@u@_@s@_@s@a@s@c@q@c@q@c@m@W_@KOc@m@a@o@_@s@[u@w@qBu@mBu@oB[s@]q@a@m@c@g@i@c@g@a@g@c@qAeAsAeAsAgAsAgAsAiAsAiAsAiAQOYSi@e@i@c@k@a@k@]k@Ym@Sm@Qo@O}A[k@Om@Ui@[e@a@g@e@iAqAiAqAkAqA_AoAi@y@_@q@a@q@_AiBaAiB_@s@KSS_@_@s@OYOY_@s@]s@[u@Yu@Uy@Qy@a@uB_@kBqAwGu@wDG]{AeI]iBm@}Ci@oCUkAm@{C_@kBq@kDe@aCMq@I_@_@oBQ{@Ke@Oy@Q{@Oy@Mq@Ms@GYMk@Ow@WeASi@Uc@OUKMIKKM]]i@]UMk@[SM}@k@OIg@[a@U]Sw@e@mBkA_Ak@]SYQ_@UqAw@YQ]Sk@]aBaAIMOK]Ug@]kAw@eAu@i@c@a@_@g@e@e@g@a@g@W][c@_@k@[i@]o@Sa@[o@]u@Wk@[s@Uk@oByEyAmDmAcDyF{No@gBeAaC]s@s@yAm@iAc@s@c@o@[a@s@{@a@c@k@k@y@u@WSg@a@i@_@k@]WOy@c@a@Sc@QWKUISG_@MWI]K[I[IUGYIi@Oa@Mu@Sa@M]Ka@Kg@Oa@K[I]I_AWoAa@c@Qg@Sm@Yi@Wi@Wk@Yk@]c@Wu@e@e@[k@c@_@Y]YWSc@_@o@k@a@_@aAu@m@i@i@c@{@s@i@e@c@_@k@e@][{@s@g@c@g@a@eA}@aAy@cA{@eA}@oAgAu@o@i@c@cA{@q@k@_Aw@aAy@kAcAe@a@w@o@kC{Bi@c@o@i@i@e@g@a@a@]_@[]Yc@_@a@]e@a@g@a@_Ay@eA}@cCwBaBqAwCkCmEyD_BuAsAwA]YkAiAsCoCgAaA{@u@{@s@wCgCg@c@UQQOg@a@i@_@i@_@i@[m@Yk@Wo@Uo@Qm@Oq@Km@Ig@Ce@?m@@o@A]@q@?o@Ho@Jo@Nu@Ra@L{@\\k@Xg@R{BfAi@T_Bh@{@Rg@Jm@Hi@Dg@Bg@@u@Am@Ay@G_AMw@Ow@Uy@[o@WSKk@Wc@Ym@a@s@k@uAwAMOm@w@k@y@i@}@IQOe@i@iAcAiCc@sAe@mBOo@SaASiAO{@Kq@Io@KcAO}AGq@Gs@O}AUyBWoCM_BQwCGoAEaAGeBQ_FEaAEwAIwBMiDIuBQ_GSyFEgAC}@EcBE_BQmBKsA]{Ce@mCQ_AgAeGg@oCO{@wBiLc@aCg@mCw@eESeA{@mEeBgJ_AaFk@{CWoASoAUsAe@gDQsAOwAQwAOwAi@uGK}ASaEOeECo@Au@EeBCeBCoE?sE@gBBiBJsEFgBHgBJgBVoENeB^kEPeBNeBPeBV_DXoCv@{ILuAH_AToBNeBPeBp@oH`@kENeBPeBPsBLsALkBHyAHaCD_AB_B@wA?u@?U?{@A}@EaBG_BI_BW{DO{AQ}AS{AW{AWyAESUcA]uA]uA_@qAc@oAa@mAe@kAe@gAi@gAi@cAwAaC_ByBo@y@s@w@iBgBs@m@i@_@_C}AgDiBgBaAq@a@eBaA_@Sm@]iAo@yA{@m@[aBaAeAw@g@a@o@k@[[c@g@a@g@a@i@a@i@_@m@e@y@Uc@[o@w@cBc@cA_@kA]iA[iAIa@Oi@YkAUmA_AiFSmAk@yCSmAG]]aB[gBg@kC]{As@uCw@wC[kA]kA_@kAaB}Ea@gAq@}Au@cB_@y@q@wAaAmBsAeCu@qAw@qA]i@i@y@o@_Ai@u@eEaGiBgCaL_PsByCmAkBq@eAaBmCcBsCi@_Ai@aA}A{C]o@{@cBc@}@gBwDuA_DiAqCw@mBy@uBeAoCi@yAYw@a@mAw@aCuAoE_@oAYcAW_A]sAYgAe@sA]oACGWgA[qA[qA[qA[sAYsAYsAMo@e@wBYuAWuAWwAUuAWwA]yBc@aDSsAUwAQgAU}AQuAWsBQ}AOqAMkAMmAU}BKgAOcBS{BIaAM_BQcCGy@K_BIuAKgBI_BIaBIiBEmAImBCq@C_AEiAEaBIaEIoEKwJCcEG_GC{DCeDKsJCgCCuBIgLEyCEmBEoACi@GcAIkAKkAIu@MaAOeAO}@Ie@I_@Oo@Ka@Oi@IWMa@M_@Wu@a@aAO[Yk@Q[c@q@U[_@e@m@o@g@e@eAw@[SUM]Qa@QWKc@OgAY}@Uq@OgAWcAW{@Wi@QcAa@c@S]Sa@Yw@k@WUk@k@q@u@o@y@c@q@Ye@]o@Sa@Wi@Se@e@qA[cAOg@Qo@Mi@Ou@O}@QkAUiBOuAMuAKwAMyAKwAMyAKwAMyAM_BKwAK{AGeAKoBGsAQuDO_DImBKaCG_BIwAMyBCw@SiGm@yS}CueAMkEGcCGsCEqBKoBEoAIsAC]Eu@KsAKuAKuAIuACo@Cw@CeAAyA@wAB{ADyAD{ABs@HyBBgB@aA?YAyACmAA[Co@ASAQC]C]C]C[C]CYMoAE_@Gg@E[Gc@Ii@Ii@Ie@Kk@G_@UyAUsAY_BQcAIc@Mq@Ie@G]Ms@Km@UqAUsAUqAUqASqAYcBQ_AUqAUoAUmASkAe@qCWsAi@yCUmASmASmAOoAOqAIsAGuAAuA?uABuAFqAFgAJ{AHkAHmAHmAHsAFiADaAD{ABiA@cCAiACqAEiAEaAGiAGqAGiAGgAGiAWiEIwAGiAGkAIuAE}@IiAOqCOqCEq@QiDMgCc@kIQsCIiAQaCWiD]qEGu@Go@Go@Gm@Iq@Im@Ik@Km@Mq@Mq@GYEQOm@Qm@Qi@Qe@Uk@Se@Wk@Wg@Uc@Ua@Wa@[e@]e@a@g@a@g@c@g@gHaIk@o@]_@]a@]a@a@e@a@e@[a@[c@]g@]i@[g@]k@Yg@Yg@u@}Ai@kAa@aA[u@Wq@_@eA]eA[cASs@Uu@]uA[wA[wAWyAWyAS{AS{AKw@Ec@O}AM}AK_BI}AG_BE}AAcACmCC_EAkA?}DA}DA}ACwB?]?e@GsDGuAGuAKqAKuAQqASsAk@_DYkAK]Qs@Uy@[}@_@y@[w@CGYm@_@s@]o@_@k@[e@a@k@]c@_@a@]_@][YYYUUSQQOQIOIQGOAOCQCMGMEIKIOGMAK?IBIFGFEFSJMDM@MAOGUO[]UWOOUUQMWOUM[OYMQIMG[QaAk@SMSMSKKCG@s@_@y@c@y@]gAe@[OGCaAe@c@Us@y@oAkAY]a@o@Ua@a@gAYeAKk@Ii@Gq@Cg@c@sICeBEoBAq@Am@C{@EuAAa@Cw@EoAEgAC{@Ck@I{BGgBGoBGwBG_CEkBEmBCcBCyACiBAkBAeBAaB?gB?sB@oB@oBByBBwABaBDsBDaBDsAD}ADsADoAFyAFoAFoAFmAHyAJcBJaBLiBLcBL_BNeBN_BN{AN{ANuANuALiANoAPuAR_BRyARyAT_BdAiHVcBT}APoANiANkALiALoAJiATyCJkBDo@DyAF}BD_D?wCAoAEaCEgBKwDGaCKmEIwEAeAAmB?}C@aCB_CB}ADkBFmBHoBHeBL}BLiBNqBNkBJeAJ_AH{@ReB\\iCXsBZmBb@mCX_BNy@TmALq@Ny@^sBRmAVgBLaALeAHcAF_AB_@FiA@[@c@@g@@q@@oCCqBGsBKkBG}@KkAS}BSiBUsBOcBMoBEeAAq@Ai@Au@?cA?W?Y@[DgBFyDB_AB}@B_ABmB?mA?kAAq@C_AGuAG{@I}@K}@OgAW{AY{AUcAa@_BSu@w@{C[sAMi@Qy@SgAU{AQ}AM{AEs@Cw@Am@AcA?}@BgBFyAF}@ZoCVoBVuAVwAh@wCPcA`@mBVsA\\wAx@{C\\iAb@uAdAwCf@mAn@uApAgCdAgBr@iAp@_Aj@u@r@{@bBkBx@w@t@u@`A_AzCsCvCwC|AgBrAiB~AoCpAoC|AmDpAwCdA}Bj@qAt@eBtBgFXw@d@}A^wAVoA`@_CR}APgBF{@Ds@FgBFiD@_C@eC@qD?k@@qE@wA@sD?}B@qB?yA?kA?}AAcAAk@Ag@Cy@Co@Cc@GiAMeBIy@MkAMcAIi@Ic@Km@UkAQ}@Qs@Me@U{@Uu@a@kAYu@m@yAa@y@g@cAu@uAeAgBcAeBaAaBu@}Ak@oA_@{@[w@M]e@sA_@eAK][aAg@aBg@_Bm@qBsAmEqAaEqA{DgBeFc@kAe@mAmA}CgAkCqA{C}@uB_@w@oBmEcCsFi@mAYq@O[i@mAi@mAGOkAqC_@{@KUg@sAc@eAwAuDM_@KYwAaEg@{AYy@Qm@a@oAe@{AcAkDq@aCk@wB_@{A]uA]wAk@eCi@iC]}AWuA[aBO{@SoAUwAWeBOkAOiASkBK{@K_AI}@OeBOkBIoAG_AGcAIeBGyAGiBGuBEiBAs@Ao@AeAAsB?aB@cB@aCBgC@g@BkAB_ABu@Bs@LiCNuCLqB^kFFy@LeBXuDT_DRyCLuBPcELsDF_EDaDBwEBqG?yBD}FDyDHqDNcE`@kHPcCTiCRyBNwAP{Ap@{E|@cGx@}En@yDf@eDx@uGj@gF`@wEVwDXoFDaAHaCB}@@u@BcBBkC@qD?yB?aC?cC?{C?wB?gDBiDFuEFeCFkBHeBHiBPwCViDXcD^kDj@sEn@kEr@qEfAuGv@sEn@aEt@aFp@oFNyAZ{CTaCNiBRwCRmDRgEJkCFoBFiCF_FBqB@gB?kCAyCCqCEyCEqBKcDGmBCm@IaBGuAI}AKiBOmCQyCUoD[eFMwBGmAE{@GmAIgBK}CCy@G_CGwDC_EAwEBqFFmEHmDLyDHsBLuCDiAD{@FiAFeAL}BV}ELeCJgBHwAHwAH}AHiBLoCHgBHuBHwBFiBDqAFeCDkBBoAF}DDmE@yB@uC?iB?kB?qBAeBA}ACaBCgBCgBC}AEuCEwBA_@Cy@EaBEeBI{CG{BC}@A[GiCI{DIiEGeFC}DAmC?oB?eC@yDBqDBwCFeDH_EFeCHiCH{BHoBHiBPmDT_El@oJPeCJcBFs@NwBT}CTgDVqDNeCJcBNmCToEHoBHoBFeBNaGHeEDmCD{DBoD?qB@kEAuA?k@A{CCyDGcFMoIImEKuFIwFGoHCmF?gD@wCBkDFiEDuBJaEFoBFgBHgCFyAHwBF{AH{BF}AFaBFqBFyBDuBDsCBwEAkEE_EIqDK_DQoDWcEYuDUqCSyBg@uF[cDMqAWkC[gDIaAOeBQyBKwAIkACc@GaBEaAC_ACq@]wKIuBGiBCkAEeAEm@Cg@C{@Ci@EmACy@GiBEaAEsACw@E{AEsBCcAGiDEaCGeDI}DG}BGeBGgBG{AGwAImBKuBIcBMiCIcBKsBMiCGqASuEKcCMyDMoFEmBCoAAgA?i@C}CAsAAeE?}A@eB@eCDuDBcCDqCHyCPoFJiCLoCV{EVwDVoDV}CPuBLoAPcBPgBh@sEh@aERyAXoBl@}Dv@uEn@mDXwANw@ZwAv@wDXmAn@kCv@}CbAwDhA_EbAiDlA_EdByFjA_Ex@aDNo@V_A^}Az@yD|@iEv@wDb@wB|@cEbAcEz@aDd@}Ah@eBdAyCrAiDzBgFrBgE`AoB~@aBhB_DrAaChBcDpCgF|A{C`AqBlBcEn@{Ar@aBrA{C|AsDjAmCbA{BhA_Cn@mANWZk@DIh@aAFKp@kAh@y@n@_Af@u@r@eAXa@RWRW`@i@xAgB~@cAfAiAx@w@|@y@f@c@^[f@a@NMPMn@e@r@g@~@o@dAq@~@i@~@g@p@]~@e@xAq@b@Q`CaALEPGhA_@z@YzAe@tA_@XI~@U|A_@lCk@nDk@hFq@|AOvAM|@G~CUrBMZCTAVAv@EtCO~AKnAIxAKbAIvAM`AKt@Ip@Ij@GfAOpB[fCe@`ASd@KfAWfBc@d@MPEv@UfBk@n@SxBu@t@Yv@[r@YjBy@hB{@t@]r@_@n@[z@c@hBcAt@a@t@a@t@a@r@a@r@a@r@_@hBcAr@a@t@_@TM\\Sp@_@r@a@p@_@p@_@r@a@p@_@p@_@fBaAp@_@p@_@r@a@p@_@t@c@dB_AbAk@NIPK`@SRMv@c@x@e@v@c@z@e@~@g@|@i@l@]`Am@z@k@v@k@|@m@~@u@~@u@v@q@rBoBxB}BtBeChB_Cr@eAt@mAlBwCl@eAbBwCr@mAl@iAVe@h@aAZk@Zk@NYb@w@b@w@d@{@tAeClBmDXg@d@w@R_@R_@lBkDbCoElBmDz@_BxB}D|@_BtCgFf@y@b@u@d@w@h@}@n@cAh@y@d@s@h@y@d@q@f@s@f@q@j@u@l@w@j@s@j@s@f@m@d@i@h@m@f@i@vC{Cn@q@n@o@d@c@h@g@j@g@f@c@l@g@p@k@j@e@t@k@r@i@x@k@r@g@t@g@r@e@`Ao@z@i@z@g@x@e@z@e@`Ai@v@a@r@_@p@]z@c@v@a@p@]|C}AzAu@VMb@EHAJCLENGJEPIrEqB`@Q\\MZKVIPEDAXGVE\\E`@EZCb@C\\AjACxAE\\Ab@CZC\\EVEXGZIVIVITIVKTKNINITMTMTONKROZWXWVWVYV[X_@Zc@d@q@|AaCT]RYV]V[X[Z[XWHINMVSXSXQZQ`@S^QZM\\MZKb@M\\KJCJEr@Wl@Q~@Yn@StBg@`B_@fAUp@MpAUl@Kx@MFAdAMnC[fBOfBId@C`@C\\AvAGf@Cz@C\\Ad@CfAC|@EhEMXAd@AjAGbACb@Cr@CjBIxCKbACLAl@ClAEpAEzBIxAGvAE|@CpCGp@AbBAbB?fA@fABr@BZ@d@Bh@B^Bv@Ff@D|@H^D|ARl@Hf@Hd@HlATf@JRDVFLBd@Jb@Jt@RbBd@XHd@Lf@Nn@Rj@NTF`@Jr@Pt@RlA\\vA`@pA^dAZrDfAJBl@PZHb@Lp@Pv@Tt@Tz@VnDdA|@TTHd@Jz@Vz@Vd@NrA`@\\J^LRHxAh@b@Nf@Pd@Pj@Tn@VbAb@~Av@d@VlDtBz@j@t@h@`BnAv@p@p@l@lBbBxBtBvBvBxAtA~BzBjBdBjBxAzBzAhAn@xBbA`Bl@rA`@jAZtB^dCVhAFzBBzBEtAIdAKdAOnB_@|@U~Bo@vEwAp@SdDcAx@Wt@Ul@Qn@Ql@Op@Ol@Ml@Kh@If@Gn@Gt@KNALAbBKt@Ev@Cx@Ax@Ax@?lCClDCf@?~AAtAA`AAz@Cl@AvBCtBE`@AH?F?zB?rACl@AdACn@Cn@Cj@Cf@Cf@Cn@Cl@EnBIt@ElBMjBK|@EtAIvAItAGlBKh@Ex@Iv@It@Kj@Kn@OdA[v@Yr@]`Ai@PKv@i@bAw@lAgA`AeAd@i@^g@h@u@j@{@d@w@j@gAbAaC`AaC`@gARe@d@kAd@kAXi@NYP]P]N[N]Re@Tg@N]N]N[N]N]N_@N]N_@L[L[L]Na@Pc@Tm@~AgENa@L]L[N_@Na@Na@L[N_@JUFOFMFMNYJSLUNWPYNULQLOLMLKXYZ]XUVQZS^WZQf@Ud@Ub@O|@[ZIZILCJCZE^E^Ab@?J?F?Z@^DTBVDRDTBP@V?TBRJTFZFRBVBb@@L?RAH?d@@L?P?NALALCJELILMJMFKNH`@TnEhCv@d@RLPLNLNNPRXZp@x@Z`@h@p@d@j@LPFHJLd@h@^`@j@l@PTDFJLJJl@r@DDlAvARTt@v@j@n@X\\Z^p@z@PRRXHHJ@NKDIDMH?\\CFAXC"
//         },
//         {
//             "summary": {
//                 "hasTolls": true,
//                 "hasExpressTolls": false,
//                 "diffs": {
//                     "cheapest": 0,
//                     "fastest": 32.2
//                 },
//                 "url": "https://www.google.com/maps/?saddr=48.595900,2.580240&daddr=48.599170,2.602830+to:48.594530,2.635660+to:48.514030,4.513660+to:48.652760,4.827860+to:48.652420,4.828340+to:48.601880,6.384240+to:48.772080,7.240600+to:48.585040,7.736426+to:48.585040,7.736420&via=1,2,3,4,5,6,7,8",
//                 "distance": {
//                     "text": "294 mi",
//                     "metric": "473 km",
//                     "value": 473161
//                 },
//                 "duration": {
//                     "text": "5 h 5 min",
//                     "value": 18320
//                 },
//                 "name": "A5"
//             },
//             "costs": {
//                 "tagAndCash": 15.3,
//                 "fuel": 65.8,
//                 "tag": 15.3,
//                 "cash": 15.3,
//                 "licensePlate": null,
//                 "prepaidCard": 15.3,
//                 "maximumTollCost": 15.3,
//                 "minimumTollCost": 15.3
//             },
//             "tolls": [
//                 {
//                     "type": "ticketSystem1",
//                     "tagCost": 11.3,
//                     "tagPriCost": 11.3,
//                     "tagSecCost": null,
//                     "cashCost": 11.3,
//                     "licensePlateCost": null,
//                     "prepaidCardCost": 11.3,
//                     "currency": "EUR",
//                     "tax": {
//                         "isTaxIncluded": true,
//                         "taxValue": 1.88,
//                         "taxPercent": 20,
//                         "taxName": "VAT"
//                     },
//                     "tagPrimaryNames": [
//                         "liber-t"
//                     ],
//                     "prepaidCardNames": [],
//                     "tagPrimary": [
//                         "liber-t"
//                     ],
//                     "start": {
//                         "id": 330082001,
//                         "lat": 48.589131,
//                         "lng": 2.656889,
//                         "name": "Péage des Éprunes",
//                         "road": "A5",
//                         "state": "Île-de-France",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 6979.06,
//                             "time": "2024-11-29T11:31:47Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T11:31:47Z",
//                         "timestamp_localized": "2024-11-29T12:31:47+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     2.656889,
//                                     48.589131
//                                 ]
//                             }
//                         }
//                     },
//                     "end": {
//                         "id": 330080800,
//                         "lat": 48.284181,
//                         "lng": 3.966432,
//                         "name": "20 Torvilliers",
//                         "road": "A5",
//                         "state": "Champagne-Ardenne",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 122486.93,
//                             "time": "2024-11-29T12:30:33Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T12:30:33Z",
//                         "timestamp_localized": "2024-11-29T13:30:33+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     3.966432,
//                                     48.284181
//                                 ]
//                             }
//                         }
//                     },
//                     "discountCarDetails": null,
//                     "discountCarType": null,
//                     "height": null
//                 },
//                 {
//                     "type": "ticketSystem1",
//                     "tagCost": 4,
//                     "tagPriCost": 4,
//                     "tagSecCost": null,
//                     "cashCost": 4,
//                     "licensePlateCost": null,
//                     "prepaidCardCost": 4,
//                     "currency": "EUR",
//                     "tax": {
//                         "isTaxIncluded": true,
//                         "taxValue": 0.67,
//                         "taxPercent": 20,
//                         "taxName": "VAT"
//                     },
//                     "tagPrimaryNames": [
//                         "liber-t"
//                     ],
//                     "prepaidCardNames": [],
//                     "tagPrimary": [
//                         "liber-t"
//                     ],
//                     "start": {
//                         "id": 330064800,
//                         "lat": 48.771998,
//                         "lng": 7.241146,
//                         "name": "Phalsbourg N°44",
//                         "road": "A-4",
//                         "state": "Lorraine",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 417388.22,
//                             "time": "2024-11-29T15:53:43Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T15:53:43Z",
//                         "timestamp_localized": "2024-11-29T16:53:43+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     7.241146,
//                                     48.771998
//                                 ]
//                             }
//                         }
//                     },
//                     "end": {
//                         "id": 330065200,
//                         "lat": 48.769302,
//                         "lng": 7.602036,
//                         "name": "Schwindratzheim",
//                         "road": "A-4",
//                         "state": "Alsace",
//                         "country": "France",
//                         "arrival": {
//                             "distance": 445531.15,
//                             "time": "2024-11-29T16:08:09Z"
//                         },
//                         "timestamp_formatted": "2024-11-29T16:08:09Z",
//                         "timestamp_localized": "2024-11-29T17:08:09+01:00",
//                         "point": {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates": [
//                                     7.602036,
//                                     48.769302
//                                 ]
//                             }
//                         }
//                     },
//                     "discountCarDetails": null,
//                     "discountCarType": null,
//                     "height": null
//                 }
//             ],
//             "polyline": "kkrgHo}vNW?g@gBOi@Qk@w@aClB}@v@Y^GPCN?l@BV@LGP]b@eBs@q@IMGKI]EUGi@G_@Ee@E_@WyBQuAGa@g@yDWy@cAcC]w@BI@K?MCKEEICG?GDg@kAu@mBYq@ISKQOUFI@M?MAMEIGEGAG?EBUm@oAyC_@aASe@Ug@Yq@OUQQQKM?WAAQGKKC@KBcBBsBB[@wDFcJ@kCA_AQ{BB_A@c@Hc@@]@gB@cE?yDAsB?y@?[CUGYIa@G[G_@Cc@?O@SD]Li@L_@b@_Aj@iAHJLFJ@JAJCHMJU@]AYAOGMIMKGMAMBKDGHGPCLAL?N?N@HHTk@hAc@~@M^Mh@E\\AR?NBb@?XAPCLELGJIHKDKDSFYFK@G?ICGEEEEIEOCMCOAS?M?Q@OBOFYH]Ja@p@kCHWJ]HYXy@Z}@HSDMHYF[Jq@`@cAnBwEn@{AvDcJ`AaCN]p@aB`A}B^aA\\aA^cAZaA\\aAXcAVaAVeAVcATcAReARcAPaAN}@NeANiANqALqALsAH_AFw@F}@F_ADs@H{AD_AB}@DcBBuA@wB?uBCsBAy@G}BI_CQwBGsAGy@[oD[kDSsBEa@MsAOwBASKyAEeAE}@Cs@CeAC_AC}@A_C?aC@aCB_AH{D@]@[Bi@JwAP{BPuBTwBHu@Ju@DYPqARoA\\eBVoAXsAVqA|@{CV{@d@{AbCcIh@cBj@kB`AmDd@cBT}@T_AR}@f@_CR_ARcA\\kBXkBRkBJuAHiAH_AFu@Fu@H_AH}@JgAJgALmANwALoANwALgANsANmAJy@Jy@TkBRiBp@iINiBPqBPkBFq@PoBPsB`@yFZkEPeCN{BNyBJaBJmBJqBFsADkADoAFsBFwBDyBDaDB_D@_D?iE?yBAqBEuECyDIwLG{IEkHKkREeHE}DOkREwHMgMA{AAwACuGA{@C}DCyDCcEC_GCkECkHCcFCyFCgFE_KAgDAmD?iA@}CBsCByAHyCH_CHeBH{AN}BJyAHgANgBJkANmARcBLgANkANgAPmAXeBV{AVwAXwAVoAt@oDr@eDR{@^aB`@eBp@wCp@yCf@}Bj@gCn@sCl@iCt@{C\\oA~@eDdAiDnA}DlBmFv@sB~@{Bl@wAn@yAlAoCZm@v@_BjA{Bb@y@t@qAx@uAfAiBr@iAdAeBdAcB~AgCbBoCbDiFhBuCtAyBbBiCtAqB|AsBhBcC`BwB~FsHrCoD~AuBnAaBfB{BvBqCzC}DjFaH~B}CrPoTlBeCdB{BvAkB`BuBtCwDbByBbCaD~DiFzAoBpBgC|@iAdDeEtAeBzCwDvAiBpE_GzDiFrAgBfB_CrAgBbCaDj@u@\\e@fCeDx@iAtCwD~B_DfCkDl@aAdA_BtA_C`BwCpAcCjAaCvA_DhAgCjAyCd@oAjAcDdA_DbAyCh@_B^iA`@kAb@mATo@Ri@Ri@Rg@Xq@Pa@Zs@b@aAf@cAh@cAxAoC~AsCl@gA~@}An@eAh@}@\\i@bA_BZg@dCcEvA_ClD{Fj@_Av@oApCqEtCwEn@eAbC{DbAcBpAuB`BmCtA{B`BkCnAqB|@yAvA}BvA}Bn@cArB}Cb@o@vAsBdAyAnAeBjBgCf@o@r@_AfB{B~AoBxBkCdBqB`BgBlAsAnAoAhBkBhBkBjBiBfBcBx@u@t@q@t@o@v@q@t@o@v@o@t@o@v@o@lB}Av@m@v@m@v@m@v@k@nBwApBwAbFmDjDcC|G{EfFqDbH_FvB}AjDcCpDiCfCgB|C{BnCmBvCwBlDmCtBcBlB{ApBaBnBaBlBcBhB_BxBoBfB_BfBaBhBgBjCiCjCmCfCoCjE{EhCwCbCoClBwBhBuB~BsCfBaCfBeC`B_C~@uApB_DxBmDfBsCjAkBdAaBpBaDrAwBdDiFpAqBzAaCnB}CvDeGdC}DtBgDtCsEzC}Er@iAh@y@pCmEzC}EnAoBbAaBjCcE`A}AfBsCnBaDrBeDj@_AbBmC|AeCxBmDxAaCzBqD|C_FnB_DbC{DfCaEnB}CbBiC`BeClBsCbBcCzAuBfBeCpAeBjA}A~@mA`AoAfAwAdAuAt@_Ax@cArBeCnCaDxGsHxEgFjGwG|FmGfL}LrC{CdBiBtGcHhDqDvA}AnAsAj@m@|CgDfFqFxCcDrHaI|EiF|DgEfDoDjGyG`HoHdDmDhAmAx@_AhAqAfByBfB}BjBkCnCcEt@kA~AoCpA_CdBgDvAyC~@uBtAcDvBmFnA{ChBmEt@eB~AsDn@uA`@y@nAoCj@kAvAwCvAwCvAuCdC}EzAqChCuEjCuEtGkLhCyE|AkCzAkCbAgB|@}A~AsCjAsBt@sAn@gAbAiBz@wAp@kAxD}GdAmBXe@|B}Dl@eAxAkClA{BrBaEfAaCfAeCXs@Tk@N_@Ti@h@sAdAwCfAaDh@cBj@iB|@sCnBiGzEgO|AyEdA}C`AmCnAgDnAaDx@sBbAcCnAuCvA_DrAsCfA{BhBmDlDoGtAaCnAwBvA}Bx@oAv@kApAkB|AyBbDqErBsCdBaCnBoC~CiEdFaHDGfCmDbB}BRY`CaD^g@RY~@qAlBiCn@}@rBsCbAwArBqChCmDdCiDfA}AbBcChBoCnAoBlAoB`BqClAuBzAoCz@{AdDcG`AiB|BoEvCaGpBeEvA{CxAeDrA_DpA_DlC{GpBeF~@gCh@wArAsDnAkDl@eB`@mA\\eA`@qAb@wAf@cB^oAZgA\\oA^wAb@eBd@qBViAXqAZ{AZaBX{ATsAVcBPmANeAPsANoALgAJcAHy@LuAJmAPuBH}@F{@F_ATkDLeBLcBLaBNeBj@gFZmC@OT}Ad@wCj@eDJm@ZcB^wBf@sCd@qCZoBRsARuAVkBL_ANuANwAZoDJwAJ{AJ{AH_BH}AFaBFaBDaBHiEHeEJeKX{ULsLHsIJoIHoINqNFqDHcGFiGJkGHqGJoJJsJPmMFyDDyDNmMPiMHsGHuG@eBBqAFwDDyDHuGH{GJcHHgH@w@DkCJcHHcHHaHB_BH}GF{DH{GH{GH{GDoCBkCF}DHyGF{DD}DD}DB}DB}DB}G@}A?}A?oMAeZ?sU?mG?a@?Y?gC?mA?uA?iB@gB@gBBgBBuBH}DFgBFeBFeBFcBHaBJcBJaBJaBLaBJ_BLeBNwAN_BN{AP}AP{AR}AR}AR{AT{AT{AHi@@GLi@^_CZqB^uBJk@r@yDvBcL~A}IhAiGBO|@}ERiAt@wDt@yDv@uDpAcG~@eEz@qDzAeG~@qDzA{F`BuF~AqF`BiFpBgGlAmDpAuDd@oArAmDfBsEjAwClAsCDKnAwChBgErBuE`CqF`CqFnBoElCiGjCaGhCaGhCaGjCcGpDiIlCiGZs@j@oAdAaCvB{ExAgDfC{F~AoD`CqFfCyFbCqFdCuFdDqHbCuFbBuDv@cBhBkE|BuF`ByDnAyChAoCj@sAzBuFrAeD|A}DL[FMj@uAdAiChCuGvBkFzCyHjDuIlCsGpBuEn@{AlE_K`DoHFMRc@fBeE\\u@fD}HbCyFbBwD~AqDdC{FnCoG`A}B~AqDbAwB\\s@\\q@p@qAfCwEbBuCdBwC`CeEhB{CpDiGpBaDz@sA~BiD`AuAx@gAjBcChAwAxAeBjBwBr@w@rCwCfBiB|B{BxCyCdCcChBkB|@{@zHwHp@o@pBqBzDyD`F}EnCmClBmBhDoD~AgBlByBJMZ[bAoApCiDz@eAdB}BzAqBnBoCtDkF`B_CtAoBV[jAeBvCgEpCyDrCqDt@{@fBuBfBqBt@w@~AcBzA{AjCaCnBeBpBcBrB_BnDiCvCoBbAo@bC{Az@e@p@g@^Yj@]j@]|A}@nCaB`BaAnBsAtAs@n@_@v@g@b@Ul@_@d@Y\\Sx@e@fBcAdBmAdAm@zAaAnBqAdBmAnCgC`@]`Au@n@m@p@o@fB}A~AkB`BiB~AoBlCkDjCwDzA}BxAcCv@sAjAuBrAiC`BcDXk@jAkCb@eAfAqCbAsCh@wA`@iA`@gAr@wB\\eAl@oBj@kBh@iBp@}Bp@aC`@_B~@cD`AeDdByF|@{CdBgGbB}F^sA`AeD~@_D^oA~@yCZeAv@kCxAeFV}@j@qBd@{AnBwGz@wCb@{AZcAZgAz@sCJ]r@cCZgAZgA^wA\\sAr@uCl@oCr@gDj@uC`@wBJk@He@RkAPeAT{AXoBXoBR_BR}AVyBd@mEl@gGRuBPqBp@sHH{@JeAJcAV{BP}ALeANgARsAT{AXeBVyA^kBZ{A`@iBz@oDj@yBt@gCl@mBl@iBp@gBx@yB`A{BbAyBfA{BdAoB~@{AhAkBb@q@pCaEdCkDnEkGfA_Bp@aAf@u@f@w@jAoB^o@j@cAdBgDpAoCbCuFj@uAl@}Ab@kAx@_Cb@qAdAcD|@{Cd@oBn@qC^yAb@kBd@uBLm@Ha@b@uBTgATeAp@kD^wBTiAZ{ArAkGx@mEl@eD|@kEp@gDZ{AZwAXoAZsAb@mB\\wATcAVeAd@cB|@iDrAqEvAoEnBmG|@oCx@iCf@cBh@gB`@oA|@kC^kAJ[ZeAx@iCb@yAh@eBtAoEd@{Af@iB|@iDZwAVoAr@kDZ_B^wBTuARuAh@}DV}BRkBV_DLaBTwDNqCHwBLgFD_F@}DAkDIsHE}BK}FIgEIiECqAAu@EwBSqKKiGG}CI{DMkIIsFG}HCcH?qCBuG?uCBwCJiILcHNmJFeED{CDaCBaBDkD@eA@}@@}@@}@@oA@qA?qA@cC?wE?}BAcCCmCCcCCeBCiCWeOOwIUaKIsFQyIIoCGaBGyAScEW_E[sEQ{BQqBi@yFOuASaBaAwIa@qDiA{Jq@eGa@yDg@cGCWGk@OmBMaBMoBKgBKoB]kI]}HIwAQcC[cEc@{Eg@{Ec@{Do@yFSkBUwBO}AQiBKoAQcCMoBKoBGgAGoAEmAGkBGeDEuCG_GCqEGyECaBGqCCgAEmAIqBI}AIyAO{BQ{Ba@sEMkASaBQuASwAYkBUwA_@_CsAwHc@eC_@{Ba@_CO_AO_AWeBSyA[aCY}BMoAI_AOeBKsAMeBIsAKeBGyAIoBE}AGuCCwAEsDE{MA_PAqLCcKE{EIaFIiCI}BSuDMkBk@gHMuASoBY{B]_Cg@}CoAgHeAwF]gBWsAYaBSmAW_BMy@OgAWqBMcASgBIw@KeAGq@Gq@Gw@Gy@IkAGaAIuAGgAE_AEiAGkBCoACqACiAAy@A}@?m@?yABiFFcEDoBHwBJwBH}AFeAF}@NwBX{D`@qEh@}Fh@{F\\kDZ{CLwAf@qFZcD\\uDFs@HsA`@aFTgD\\sFRoDT_FVmGN{DToFNwD\\aIV_GP_DNeCFaANeCHaADm@F{@HkAf@iGj@mGl@aHl@{Gh@cGb@cFf@yF`@kEl@{Gd@cFZsD\\wDh@qG^_Eh@_HV_ET_EP_EPsDNgEFwBBqA@g@FkCDoCByBBeC@yB@yB?aCAqDE}EAsAAuAEoDCkAIyDC{@OsEQmECw@IcBKoBMsBKiBIqAIkAM{AKoAKgAMqAGk@Iw@E_@E_@K}@OmAg@yDWiBKu@Ga@CMEUG[I_@Ou@SaAKg@Mm@S}@Mg@Oo@[uAWeAYgA_@sA[gA]iA[_AUo@Oc@Qg@Si@Qe@Wq@Um@Sg@Wm@]y@_@y@]u@_@w@e@_A]o@Uc@S_@_@q@_@o@c@s@]i@cA}AU]U]Ya@U[W][a@[a@a@g@_@e@Y]c@i@[_@k@q@]a@m@s@g@m@g@m@c@i@i@q@k@u@a@i@[c@]e@[c@W_@q@cAYc@]i@U_@_@o@k@cA_@q@g@_AWg@Yk@Ue@_@w@c@aA_@{@]y@Yq@Uk@Yu@Yy@[{@Sm@Wu@So@_@mA]iAMc@W}@YaAMg@Ka@WeAWeAUeAQw@Os@Q}@Mq@SeAQcAMw@Ig@My@My@Ks@OcAMaAKy@MgAKaAMqAKgAIkAKeAIiAImAGeAEu@Ey@IkBG{AQiEKaCO}DEeACk@GyAMqDGyAG}AOgEAYE_AC_AC_@CeAAqBC{ACqBCaDCcFBuDF_HBsBB}BB}ADoDBcD@iB?{C?sBAiCAmACoAGwBEuAGaBEy@SsDK}AK{AI_AKoAEe@Ea@MkAK_AIs@Iq@M_AOiAKs@M{@Ga@Ie@]qBQ_AWsAMm@a@eBWkAS{@Mi@Qq@YeAQq@_@qAUw@]eA_@iAWw@Sk@i@{AUm@m@}Ai@qAYq@]y@_B_EYq@_A{Ba@aA_@aAk@wAQc@Qa@ISM[Qe@Qc@Qe@Yw@Uo@Qg@e@uAe@yAk@iBK]Ma@Oi@Qm@_@sAg@kB]sAWaAQq@GUEQQu@WkA[{A]_BGYIa@Mo@a@uBSiAIe@Ie@G]Ie@Ii@EWG_@Ii@Ik@Ga@c@{CGc@Ge@K}@OqAMgAMiAOwAQeBMwAQ{BMgBKyAKaBG_AGgAEy@Ci@IgBIsBGyAKeCScFQiESqEOsDE_AEcACm@EaAIwBIsBCk@E_AG{ACy@EuAEgAAWCu@Cs@Ac@Am@Ag@CiBCwBAuAAgBAgB?gB?aB@kB@cABsBBgBDuBF}BBw@BaAFcBFcBFmADw@NoCDq@F}@HqAHgAHkAL{ALwALuALuA^cE`@uE^gE`@sE^iE^gEVyCLaBJwAHiAJ{ALoBJoBDu@Dw@FqADaADgABy@@_@@[D{ADoBDmBByABcC@iE@qGAuAAiAAeAAw@Am@C}AEeBEuAGkBGkBIyBCk@E}@KmBKgBIqAQeCGy@Gu@OgBMuAKgAIw@g@{EOuAW_Ce@}DGm@K_Ai@aFUsBe@cEgCsUy@wH{@}He@gE{@gIe@kEg@kEoAkLoAuL_AmIa@{Dg@eEg@{Eo@wFYgCMmAIs@W}BMiAg@sEUwBe@kEMaAW{Ba@wD]uCi@gEo@}Ey@mF_@_CcAkGi@qDg@sCy@mEWwAUsAO}@My@U_BQmAM}@Io@K_AMgAKeAKgAMyAKqAIoAKsBEu@G_BE_AE}ACqAE{BA_BA}A?oB@gBBgBBiABgADyAHcCFwAJmBNuBL}APoBRqBRcBTeBTcBT_BTuARkAVwAl@wCt@eDn@sCpAwFl@oC\\_B~@_FVyA`@kCVkBVuBLiAPgBPoBJsALmBLyBFsAFaBHoCDmBBoB@wA?}A?oCCqCG{CGgCKcDK}CGmBEuAEsAOwEIwBGsBGiBGuBIcCKeDM_EK_DGqBE{AEaBCuAAgAAsACqE?}E@_C@eC@sBB_BDuBDyAHoCFiBHsBHgBJoBJeBLmBPaCXiDRwB^kE^iE`@}E^wENyBHwAHwAJwBNgDDgADgA@c@@i@DkB@]FyCBwBBsC@kC?oDAyCAyBCkBE}BEuBIcDIoCCcAAa@K{CWkJCw@EsACw@C}@EiBEyBC{AC{BAwDAcF@wF@qL@aF@gN@eF@gH?sA?wA@aD?sI@sD?sAAwBC{CCkBCuACiACcAC_AEwACy@Cu@GwAIgBIeBIaBKsBOsCQcDUyEUaEKuBKwBKwBEaAEcAEoAEuAEaBEoBCuAA}@CuBA}AAcB?eB@kC@oC@kB@oAB_BBsAD}ADuAFgBDiAF{AFyAH_BHwALsBJ_BLeBNoBL_BJkALqANwAP}AP}APuAPsAPqAR{APsAT_BZwBT}AVcBTaBR{ALeALgALqAJiAFs@LaBJ_BHsADw@FsABk@@WBq@Bq@Bu@D}B@o@@qABmC?m@?cACkBAeAAcAEiCCkBBg@@]BaC@aABe@PqANi@Ti@z@cBJ[F[D]Bm@Ik@Si@Ya@]YSQs@g@c@YOKg@]]Ui@]YSQMUOOKQQMMYW[YU[Y_@Wa@y@wAMYQc@KW]aA_@kAm@iBcA_Dm@iBsFyPiCeIgAmDk@gBQe@[y@Yo@Ug@Yk@Wg@eAqBc@{@u@yAoBwD_@u@_@q@Q]QYQW]g@Y_@SU}@cAyAcBo@s@]a@uCeD{CiDeAkASUW[U[W[c@i@c@g@c@i@EUEOEKGMGKKQQWKMKKKIMIUMMGKEKEIEQIUU]]USYUe@[MIOI[O]YSQKKIICUIYKMMk@Ie@Gu@Gy@Am@Ce@Kc@A[EyAMsGe@eQcAg^gAia@QuGEsAHwADg@HIFSDY?QCSISIKIGQCOWKOKYK_@o@qCWkAUw@Ma@Kc@k@eCc@gBu@kCq@wBYw@_@aA_A{B}@sBiCcGuAcDqDoIsC{GeAcCWm@o@_BWm@Yy@oAoDk@yAa@gAm@cBQo@EOCKCMCQAO?ODMBM@O?MAOCMGMGIGEKEGAG?KKIMEKEMEOGUU{@_@iBUeAi@aCg@_Ck@qCo@oDiAsGq@sDuAyHEUyDeTe@kC_@uB}AaJa@cC{@gFu@iEEg@AMCOAQAU?K?M@Q@KJODSF_@BU@W?SASCSCMCKEMGKMOIGIEICKCKAM@KBIDKHIHKJELGPCNU^ILIJQJYL_@P]T_@Vc@ZUPc@f@k@r@g@d@]XkAv@iBj@_Cp@i@Ls@PgC`@oBX{ANi@Fw@Hq@Fa@FgALUB{AN{APyANs@Fu@HoAN_BPaAJWB_@D}@Hy@JmBRuANsANuANg@Di@FsALk@Di@Bo@@y@AcAGsASqA]}@[u@_@w@e@w@k@q@k@u@u@k@o@m@y@c@u@o@mAc@_AYq@Ys@]aAQg@q@gBYq@[q@g@}@S]cAqAc@e@c@e@e@_@g@_@g@[y@a@[Qy@a@cAi@i@Wg@Yi@[g@_@g@_@USOOc@g@m@w@UYa@q@]w@[s@[w@Sk@EMW{@U_AOs@SmAM{@UeBUeBGi@e@uDUiBGw@Ic@OoAAGCQUgB]uCUeBWqB_AyHy@gH_@_DSkBKuAG}@GoACiACkAAiB?SB_ABqAHqBJiBXuCf@sCn@iDPeAf@sCn@uD^qBb@sCLiAFa@Dm@@OHw@J{AFeAFoABeABmB@iB@eA?[@w@@oF?M?{@?Q@gB@sA?gA?aB@{JBqH@}H@_E@_D@qD@gD?q@?U?u@?Y@cB?wBAiCAeBCmACqAEqAMyCOgCO_COeBQcBUoBSuAKw@ESY_BsAmHe@cCkAmGaBuIKk@Ow@oEmUaAeFUgAQ_Aq@mDg@kCe@cCq@iDSeA[aBa@qBk@wC]kBUiAUiAu@uD_AeFcAiFi@kC[yAMo@Q_AY}AKi@c@aCOcAKeAIeAEgAAiA@aADoAJeANeARcAX}@Z{@`@w@`@q@f@k@h@g@j@a@j@[zAi@t@Sd@MzAe@j@Wh@Yf@_@jAkAx@iAf@aAr@oAh@eA`@w@Xo@`@w@JSv@wAJQx@_BR_@Zk@f@eAjAaB`@m@Z[TMf@Qt@Or@Q\\M^QNMRMTWNQNSJMNUHSFIDKDOBMBMmAoBYe@U]MSEIe@s@FSBUAUIUKOGCEAM@OGIEKKIQO]Yu@W}@a@oAI]GWSqAQeAUsAEYGc@Gi@SwAKBKMQQU]Q[Q[MQQS[]]]]_@k@m@a@a@_@c@[a@[c@S]QY]e@U[S[S]We@Sa@Si@Qc@Ui@_@_A[u@y@yBEMM[GMEMYu@IQKQKOKMOMMIMGMIMGWKUKOIOKKMMOS[_AwA[g@Q[MUMQMOQQMMYWg@]a@[USOMWW[]_@e@_@g@MQKOq@{@s@{@w@aAgAyAe@q@SYOSOQQOKIQKSIWIUIQIOISIYOu@[uBu@wCeA_AYQGKCICSG[KUI]MOGSKYQ]U_@Y]Y]YmEmDe@_@}@q@u@i@UOWOs@e@uA{@WOoBoAc@Ye@]a@][YY[UYa@g@gByBcAsAe@o@k@y@g@u@k@}@c@q@_@m@g@{@c@w@wOsYYi@Ue@Yo@_BqDYm@Yg@_@m@[a@]c@_@c@iJyK_@c@_@e@]c@]i@We@Ue@Ym@[s@sFmM_JsS{CiHqCsG[s@KUc@cAaGcNaEqJYq@Ys@Ws@_@iAW{@wFwRyB}HYaAUs@Wo@[o@[i@a@m@oDkFuFiI_@k@[i@[k@]s@c@_A_@}@cFsM[y@[{@[{@Y{@Y{@Wy@[cAW}@iJ{\\W_AUy@WcAU_AQw@SaAWoAKk@QaA}AwI}AuISw@Sq@Sm@oAqDSm@Yy@Qi@Oi@Mk@Ow@aA{FWuAOo@Ok@Oe@O_@Ui@KYI[Ka@Ka@qB{I{Qyx@_Kuc@uCgM{AyGS{@WeAQq@So@Ui@Yi@a@q@}DmGsM{SkOmVgKmP}AcCsCqEmAqB]i@_@i@_@e@[_@m@o@wJcK_ImImM_Nc@e@cRyRkIwI{GeH{A}A_BcBmNaOqG}G_ImIeDiDsAsAa@_@_@[YSWOy@e@eE_CuKaG{p@{^uC_BmC}Ao@]uF}CkFyCkEaCm@]c@[c@]YY[a@]g@cDaF_DuEcFwHyG}JiF_IoGoJmFcIsCcEiCsDi@y@wAsBa@i@i@s@g@o@{AmBaAkAsCsDu@aAuD}Eo@{@kA_B}AyBk@y@aAwA[e@q@aAm@_AeAcBgQoYwHgMaHaLeDsFmM_TaC{DwPwXwBmDgDsFc@u@Yg@]s@[s@_@aAaBqEe@qA_AiCgJcW_G_PiG{P_IoTiOab@c@mAi@sASg@uAwDFKFQFW`@_BRg@Zq@^q@HKPWV[h@o@LO^e@FGX[Z]`@_@`@YZQQm@Sm@mAwDaBaF_@gA]eAi@aBK]I[G]E]Ee@E_@Ig@I_@Ma@Og@Qi@Qg@Bw@@Y@SBSDUDQFSLWLSb@q@R]N[HYF_@B[@_@?c@C_@G_@Ia@SaAoAaGScAUsA_AoFOaAIq@Ei@Ck@?i@Bm@Fg@Ja@L_@NYT_@b@o@dAyA|FaIj@w@Va@Tc@Rc@Zy@Pi@Po@Rw@tAiFvAoFd@gBJa@Hc@BU@Y?e@?iA?e@?]?_@?eA?[?]AqB@a@BYD]DWF[HYV_AH[F[BS@O@[?SAUCUCOG[Ia@GWGWS{@WkAMo@QaAGc@C[AU?W@SBSBOF]H[J_@Pk@h@_BRk@Pi@Rk@Lc@FWFa@De@@_@?o@A{BAkDQsr@IoX?iLDaZ@oH@_F?wAByW@aGA{AA_ACm@Cg@Ec@Ko@[aBIa@WgAMo@Ie@[sBk@mE_@{CS}AU{BI{@Gk@E]G]Mk@c@uBOu@]eC[eCKw@Im@My@SiAQw@Os@Om@Qo@c@sAi@{Ay@{BKa@Ga@E_@C_@Ac@?cCBaC?}BCi@Ca@Gi@Ie@Mi@Ok@wAmEqA{Dk@aBQk@Oi@Ok@Mm@Mq@Ms@c@uCO}@eAiHuB}N_EmXgGab@u@gFQgAUuA[gBe@aCyBkLcDqPIc@Mk@Mm@Oo@Ok@cAqDc@gB[_BSkASmAQeASsAMcAK}@KsAQwCI{AQgCO}BU}C[oDS_CGs@A[@YBSDOHSJQJSz@aBhAqBTe@pBuDJSLUJSFOJWJ]FWHa@Jm@Hs@TqB\\kCRaBHq@Dc@B[@c@?c@Ck@OiAOeA[iBSqAYeBWwAW{Ag@iCUoAMw@Iu@G_AGiAOgD_@oHe@oIQuCCYCSEQGSEMKUIOIM[i@o@}@{AsBaAsAy@kAoByC}@kAc@m@W[UUSOWOWM_@K[K[K]OYQ_@[g@c@m@g@yBiBcAy@uGgFeBsAk@e@a@]g@i@s@y@m@{@k@aAm@cAy@sA{AgCuFaJyE{H]i@Q[S]Ya@Y]WW_@[]U]Q[O]OcA[qBm@eHwBcEkAu@Us@Ue@Qg@U]S[UYUUUWYQU]k@Ye@_AeBeCkE_BsCuBuDaAeByBwDiAsBaCkEw@wAYg@Uc@Q]O_@M_@M_@O_@MWKOSa@OWkBiDm@aAUa@KUKWKWM]Sq@Qm@]oA]gAMg@e@aBk@sB_AeDa@{AyAgFcAmD}DmN{AgF}FsS{AkFgJyAwFw@_AMoBYWEeMkBwO}BeIkA{XaEcNqB_NqBwDi@gDg@{AU{@MsIoA_\\wE}Ce@oDg@oDg@eAQw@M{K_BsX}DeJsAmAMUAQ?M@QBO@K?m@CO?U?U@oANQ@Y@M?E?IAIAUEyCi@QEKEMGMIIGKIq@q@y@w@o@q@qCoC_D{Cc@c@c@a@m@a@QK_@SkAk@iDaB{NeHcJqEmAm@eP_IaHiDqXyMmVwLgSyJaBy@MGiDaB_@OQGWI[I{FmAuDs@sFiA{QsD_Ew@sDw@a@K_@K]M[Mc@YWQUSSQSUW[g@q@qCyDiIaLeB_CY[[[YU[SWOc@UiDaB_OkHeAg@sFmCeDaByCyA{MuGgEuB}FsCkB}@w@c@a@W[WUWUYJOFKDK@I?IAIAIAUAMCMEOGQ_@}@Qc@Oc@Oe@Me@Kg@Ko@K}@I_AeAsNg@uGG_AAWAa@@c@B_@D]F]H]J[JULS`AwAQa@MUMQmAaBU]Q]Q_@Oa@Oe@Oi@Qo@Qs@WeAQu@Q{@Q}@Os@Ss@Oc@Qe@wAoDc@eAYs@Wu@Wu@Sm@Ss@Oo@Ow@O_AOiAi@wEMiAIm@Ii@Ki@Ok@Ss@Uq@[}@mAiDSk@Qc@Se@Uc@Wc@[e@]e@W[[a@U[SYYe@y@uAWc@SYU[UYUWWWy@s@i@g@i@g@KMSYU_@We@@I@M?QAQIs@Ee@Ca@Cq@Ay@?yC@_D@q@Bk@Dg@BSDYF]Jg@Nm@T_AHa@F]D]@a@Aa@Ce@Ek@a@cFEg@Ce@AU?K?m@@w@@_ABeAFgC`Ag^P{FBs@@i@Ak@Ce@Ec@Ie@Ka@Mc@M_@Oc@Qa@OYQWQUSQUOSKaHgDa@S[SUQSUS[S_@Wm@oBuEqI{RgFsL_CoFg@mAYs@Wu@Uu@Ok@Oo@Mm@Ko@QgAQkA}BaP_CgP_Gqa@cEmYmBeNG_@GWISAc@Ci@Go@Is@Mu@Ou@Ss@W_A_EgNKa@Ia@Ga@Ec@Ce@Am@?u@B}HBw@Di@Fa@FULYLSNQRQf@c@\\[\\]`@c@PSn@s@PSNSJSHUFU`AeEJg@Hg@Fg@Hy@BWD]Fa@Jg@Le@Ne@Pc@Te@R]RYRWVWTURS_AqDg@wBKa@IYIWKUKOSUWWIKIIQQSSUSUSUSQSQYQ]Wi@}AgDuDcIs@{A{A}CeDgH{B{EQ]S]U[UWa@_@_@[cF}Dw@m@s@i@e@[]Sa@Qa@M]Ia@Gc@EmAIB_@BYBQFWHUJWb@cA~EoLhM{YXq@Vq@Rk@Rq@Ps@Pw@hEsRjCkLf@sBVcAPo@Ni@V{@Pi@Rm@Nc@Ri@N]fAaCVk@Tk@Rm@Rq@`CeJT_APy@Jk@Jk@N}@PkAd@cDdEyXhHye@zDmWpAuINmAJy@H}@Fw@Dy@Dy@DgABmAHoFBqA?O@gB@iA@Y?U@gAB_ADgAFmAFcANwBB[HgAJiAVaDPcCH_AFu@NyAGEg@YUMGCOIUIOE]Ko@S[KgA[yAc@UIs@SeF}Ag@OwBq@sDiAYKOGiAYsAc@yAe@sKiDyBs@e@OAm@Aa@Aa@W_IGiBCm@C_@CSEQEKGIIIIEKAI?M@iBZmAPQBQ@M?Q?SAkDWUCQCSEUGWIQIq@[]OYK[I[Gc@IUEQCCwAAu@?iAB{D@mA@o@?q@Aq@Ac@Ca@Ec@Gi@m@uDUqAOcAKy@I{@G}@GeAG{ACmAAqA@_CB{A@mAAy@C{@Eu@Iy@OiAS{ASyAK}@Go@Em@Cg@Ae@A}@?iB?iA?o@Ao@Ck@Ei@Ge@Mu@_@gBaBuGMg@Ke@Ic@Gc@Gk@I{@YaEM{AQkCKeBIcAIq@Ii@Ic@Me@Oe@O_@_@w@a@u@We@Ue@Se@M_@K]Ka@Ia@G_@E[CYC_@Ae@?g@@i@Bc@NqBB_@@_@@a@?i@Ae@Cc@Ee@Ga@Kg@Oi@Yy@[u@[o@]m@oB}CWc@Uc@Yk@Wk@Um@Qg@Og@Ok@Mi@Mm@Ig@Gc@Ge@Ec@Cc@Ci@Am@?k@@o@By@FmAX}DJoAFgA@s@?u@Aq@Ck@Go@Ik@Ic@Mg@Qi@Qg@Yq@i@iA_@u@[s@Qe@Qk@Oi@Ow@M{@K}@Ku@Km@Kc@Mc@Qe@Sc@Yi@eHcMEUGWGUIUKKMMKIOIy@kBsAgDyD_K]}@_@eA_@gA[cAY_AWaAWeAqA{Fm@gCSw@Qq@Oo@Mm@Ii@Io@Ee@Ce@Ae@?m@@i@Bo@Dq@Dk@Dw@Bo@?q@?[AYC_@Ge@Ii@Mo@I_@Mi@Mo@Ms@Kw@OeAa@uCMaAOkAk@sEK{@MiAKeAKiAIaAGy@i@qHMgBKaBIwAIwAGoAEwACgACiAAw@AgA?u@@_ABeADeAF}AfAeXDmABgABsAD{BDiKDsI@wAB_BBu@Be@Dg@Hq@L{@N}@`DoQZkBXmBXqBfBoMJu@Hs@Dk@DaA@YBiADgDBiADsB@c@BiADcADo@Fu@Hu@TcBRcBl@qEVeCVsBHu@Fy@@c@?[Ac@Ce@Ce@Ek@KsAEg@CWC_@AUA[Ag@Ac@?aA@y@BaAFyA@W?UAQAICKEKOYKSGOM]IOMSOSQQSOQKUKa@Q_@MUIi@OsD}@SGKCMEKCg@Og@Oc@KMEIGGKCKAK?O@MBSF[Hc@L{@NkALeAH}@Fs@H_AXaDH}@H_AN_BLkAJ}@Ju@NcAFe@Ba@@c@Gi@HEDEFIDGLUHQLYIe@GUOc@Wk@O_@KYK]GYG]Ea@Ca@Cg@I_AC}ACsA?aB@cBD}C@k@FcBFeBJeBJeBNcBN_BP_BPaBR_Bd@aEP}Ab@uD`@oD`@gD^aD\\_D^}C^}C^aD`@sDLeA^aD`@iD^gDb@wDr@iGZkCXeCD[Hw@PyAPyAPyA`@wDP}AN}ANcBL{Ad@cGDe@LeBPaCHaAZgE\\eE\\aEJoADk@B[Dg@X}DLaBNqBHaAJmAFm@@OHcADg@Dk@De@LqAHmAJoAHkABQB[B[JkAHgA@OFw@B[Dk@JgAHgAJkAFcAHgAJkAHoAHgAFgAJuAVwCBWFw@HoAVcDXgDVkDXkDVkDXkDViDViDXeDVeDVeDTcDVgDVcDVcDVgDV_DVcDVcDVcDJoAT}CT{CTuCRsCRcCFw@LgARuBTsBDg@JcAHw@H}@F{@Fw@LmBPoBFw@Dc@BSLoBNoBNoBNmBNmBNoBNqBLiBP}BPuBRyBTwDN_CN_CN_C@UDg@H}@LyADc@J_AL}@N_AP}@RaAJi@DU\\wA`@aBVy@n@sBVw@L]JYXs@@CZs@\\s@LWLW\\m@\\m@^k@^m@`@i@^i@`@i@b@g@`@e@b@c@b@c@b@c@hAeA|@w@LMjAcAnAeAlAgAhAeAd@a@f@e@j@e@`A{@j@e@bA}@lBgBfAiAdAmAdAoAb@i@`@k@`@k@`@k@`@k@^m@^m@^m@\\m@\\m@\\o@\\m@Zo@\\m@\\m@\\o@\\m@Zm@\\o@\\m@\\o@Zm@\\o@\\o@Zo@PYfAqBpA{Bj@cA\\m@n@oAZk@t@wAv@wAt@uAt@sAr@qAr@sAXi@Xi@Vk@N[f@iAHQ^_ATm@f@}Ad@{Af@}AJ]XeAFUJc@Li@Pq@Ns@Nu@^kBLw@Lw@Ly@Jy@TuBJgARgCDe@VcELaCFcCBaA@cC?eC?_AAaACaAGaCMaCIqBOuCIaCK_CK_CMcCKaCKaCK_CA[KeBKaCKaCMaCKaCKmDCm@Ai@EcCA}AAkD@cC@aC@aABkCFyBJcCLaCL_CNaCPaCRcCR_CP_CR_CP_CR_CP}BP}BR_CVgDJ{APyBF}@F{BB{B@_AA_ACaCEaAEaAGaAGaAUaCE]e@_DQ}@Q}@S{@S{@Uy@Wy@Yy@Yy@]_AYo@_@s@S_@[m@Q[a@s@c@q@e@o@e@q@e@o@e@q@IK[c@e@q@e@q@MSU_@c@u@c@u@c@u@MWS_@a@w@a@y@_@u@a@aAQg@MU_@_AUi@IUm@{AUm@EQMa@Oe@CIIU]kA[eA[gAYgAOo@_@_BWiAWiAMi@I_@WiAWiAWkAWiAYiAK_@Mi@YiA]gA}@mC_@cAa@eAc@aAc@cAc@_Ag@aAe@}@i@}@i@{@i@w@i@y@k@u@m@u@m@s@o@q@o@o@o@m@q@m@q@i@_@YQMUOkAw@o@_@wAw@YMi@Wk@Wk@]m@[k@]m@_@m@a@k@c@k@c@i@e@k@c@o@s@]a@W_@q@aAc@u@a@u@a@y@a@}@]_A]cAYcAYgAWgAUkASkAOmAMoAMqAC]IaAScCOkBKwAIwAIyAG{ACwACyA?{A@yAByAD{AFyAD_AJqBJyATsDRsDTsDTuDHyAJyATqDRsDRmDDwADuA@uA?uA?sACsACuAEsAU{FOkDOmDMkDOkDMiDOeDMgDMkDOiDOgDOgDMcDMcDGwAEmAOiDMkDKmDEmDAk@C_CCiDCiC?WAeDAuAC{AEcBE}@IqAIaAMeAOgAQ_AWoAm@gCWeASy@Sy@[sAWiAUaAQeAQiAKy@OsAMkAYeCK}@KaAMeAOcAOaAMu@SkAQaAQeAOu@c@iC_@_CM}@K{@KgAGkAE}@EsACqA?i@?q@@uABcADkADaAPmCNqCD{@JeBDm@Bc@LgBJiBVqEJgBJiBB}@@i@BiB?iBCiBEgBKiBMgBOgBQiBC[KkAOiBGkACq@M_EAiBBiB@eA@a@HgBJgBVoEVqEb@_IFgALeCViETeETeEVgETiEJcBTiEVkEJeBHgBFgAB_@JgBVsEXsEVwEVwE@QVgELwBHcBDm@F_AV}EX}ELoBXaFX_FV_FXaFLoBJmBJoBLmBHmBHoBDmB@mBAkBCiBEgBIeBMeBMcBQeBSeBUeBWeBWgBUiBM_AIi@QsAEUUiBUiBQgBMiBKiBC{@Cm@CkBCyE?yE?mB?mB?kBAmBEmBGmBKkBOmBSmBSiBWiBUiBWgBUiBWgBm@qEIm@e@cDo@sEm@qEm@sEIi@M_AWkBo@uEq@_FUcBKw@OeASyAUiBo@sEo@sEm@sEo@qEm@qEm@oEm@oEm@qEm@qEo@qEm@sEk@uEUiBSkBOgBMkBImBGmBCmBAqB@qBBoBFqBHoBNoBNoBTmBVmBXkB\\iB`@gBb@eBd@cBf@aBh@aBf@}An@oBd@wAlAgEd@eB`@gB^iBZkBXkBVmBRmBPoBNoBLoBHiBFwBB_A@o@@qB?gBA}BEqBEgBAq@Cq@AUCq@E}@K{BGeAA]QyEAa@EcAGmBSkEGcBQkEA_@E}@Cu@Cw@SmESmEKgBMgBMgBOeBc@kESeBSaBm@eEq@cEw@aEKg@Qu@_@}AaA{Du@kCQk@kAuDqAqDwAmD}AkD_BiDu@wAIOe@}@yCuFaB{C_BwC_ByCm@oAm@oAk@sAk@sAi@uAi@wAg@yA[cAIWe@}Aa@}Aa@_B_@_B]aB[aBYcBo@gEWcBm@eEWcBkCmQm@cEm@aEm@aEm@aEm@cEm@eEeAiHo@gEo@iEE[G]Ii@o@kEo@mEq@oEo@qEq@qEWgBq@oEu@aFSuAYkBWaBq@iEWyA[qBIc@OaAYeBs@kEMs@e@yCs@mEYcBQcAIi@s@oEg@}CMq@s@qEe@sCO{@s@qEu@qEeAmGc@oCs@mEs@oEu@oEu@qEs@oEu@qEs@mEq@oEo@oE_@uCM{@WgBq@qEYgBSmAO_AOaASqA_@aCq@qEq@uECSUwAWkBWiBeAcIo@sEq@uEWiBq@sEu@qE[gB]eB]gB_@eB_@cBa@cBc@aBc@_Be@_Bg@}Ai@{Ai@yAm@wA_BkDgB_Du@mAw@mAy@gA{@gA{@aA}@aAaA}@aAy@aAw@aAu@cAs@c@[]UaAo@cAo@_BeAc@Y_Am@aAs@{@s@{@w@e@e@YY{@u@y@aAy@cAw@gAw@gAu@mAs@oAcBgDq@uAo@uAaBkDo@uAo@uA_BiDo@qAo@mAq@iAu@eAu@}@y@y@WQg@a@}@m@aAg@aAa@cA[eAYgCm@c@MQEe@OUIUI{@_@}@e@k@c@MIu@m@u@u@KMwAgBm@_Ak@gAi@mAg@oAa@uA_@wAKi@Mg@Ke@Oy@Ga@SaBE_@Ee@Ek@G{@KoBGaBEqBAsAAmB?sBBmBB{ABcBJeEB_ABy@LoEFsBBo@D}@FuAHcBXwEJgBZsELcBZgE^sENkBB_@P_CPsCJkBF_BRoEBiBBmE@_CC{BEkCM_EUkEMwBMkBc@iG[sEYcEKsAOqBWqDOuBWsDW_ES{DMyDEgBGuCKkJEkCEwCEyBGaCGyBIcCKkCOoCQkCSyCS}CScDQ{BEo@IwAO_CEy@UoDWwD_@}EWcDKsA_@aEQ}AE[]cDc@aEa@cEa@eE_@gE]eE]cEMyAEc@KuA[qDm@cH]aE]aE]eE]gE_@gEo@kH]gEIcAEa@_@iE]mEm@uH_@mEmBsU]qE_@qE_@qE]mE]mE]gE[iEC[YmD]iE]mEm@sH]mEm@wHc@{FKuAYsD]oE]mE]oE[mE]mE]kEYgEY_EUuDMsBGw@IqAIoAGkAGkAGgAEgAAgB?_A?_@B_ADaAH_AH_AN}@N_AR}@R}@V}@V{@n@}BT_ARaAPeANeAJqAHcADiA@mA?oACoAIqAKqAOoAUoAWmAWmAu@}C[qAu@yCSy@a@aBs@wCWiAKg@Ic@Mw@Ga@E]CUEc@Ei@Ca@Ce@AWA[As@AwBAqAAuDAwDAuG?[A}C?wDAwDAwD?q@AcCAaB?qAAsDAyA?}A?yBAqA?{@A{A?{AA{ACyD?yD?{DA{A?a@?{@?e@Au@?wDA}A?{AEyDA_@C{@Cg@Es@I}AG_AC]K{AM{AUqCEi@K}AI_BE_BEaBC_BGcEIeEIcEGeEIcEGeEIcEC_BIcEC_BAaB?cB@aBHiHFiEFgEFiEDeBFeBFeBFeBPkEHgBJeBNgB\\kENiB^mENgBJgBHgBLmEJmELiENsD\\cITiERmE@QBsAFmE@oE?gB?oE?sE?uE?sE?qEAkEAcBAm@C}@C{ACkAAgAAq@GgECgE?aB?aB@aB@_B?s@@s@@wA@}AD_BF}AH}AN{AR}AV{AZwALc@Rs@b@qAf@oAj@kAn@gAp@gAn@gA^m@PWp@eAp@eA~AoCn@gAl@iAVk@Pa@j@mAf@oAf@oAjAeDjAeDf@sAx@aCNc@d@sAfA}Cj@}AlAiDd@sAlAmDx@eCPg@ZaAl@mBjAmDt@}BX}@dAcD`@oAPg@Rk@Rg@Tg@`@y@^q@Xe@V_@Z_@TY^c@v@y@x@y@v@y@dDiD|@aAp@}@T[Xg@l@gAf@iAb@oAdAcD`@sAb@uAhBwFdAgD`@sAb@qA`@sA`@qAJ_@Ps@Ji@Jm@TyAP}AL_BFaBBcB@eB?eBAeB?gB?gB?gB@eBDgBFkBFaBHgBJeBJgBToEJgBJgBHgBHiBDiBDiBFsEDuEDuEB_EFeF@mA@cA@aABiB@iBFqEDsEDqEDsDDsFDsEDoEFwHFmHBmB@eB?eBCeBKkEOkEMoEMmEKoEMoEUuHE{AImBGcAQaCGo@Gk@QmA]oB]wAw@_D]sA_@uAa@}Ay@}Cy@}Cy@_De@kB]sAi@yBOm@]qA]sA]sA]sA]sA[sAYwAWwAWwAM_AE[O}AO{AK}AK{AGeBE_BCsC?m@?c@?aA@{AD_BD_BH}AJ_BL}AJy@D_@D]JaAT{AVyAXyAZwA\\uA^uA`@sARo@Na@d@mAd@mAh@kArAuCHOLYz@iBh@kAf@kAf@mAd@qAb@qA`@sA^uA\\wAZyANy@Ha@T}AT_BVcCJ{@NaBNaBZeEZeEZeEZgELaBNcBZgEbAkNLaBJaBHaBDaBDaB@aBAaBCaBEcBOeEIiCE_AOgEUuFKyCQcEYyDQ{AS{AU{AU{AU{AU{A[qBGe@Ie@AICOMy@COg@cDk@sDWyAYwAYyAMk@Mk@]wA]uA]wAy@qDy@uD]yAY{AY{AW{AWyAUyASyAQwAQuAOsAMuAKqACa@Eo@AKE{@E{@C]GmAEwCCmACoA?eD?uB?s@@yA?yAByDB_B@a@FiD@k@DsC@eB@gB?sA?cC?cBAiBAkBAkBEuEAiBCuEAiB?iB?iB?sE?iB@iB?qE?sE@qE@cD?o@@sEBuEFuEDiBHiBJiBLiBPiBPeBTgBVeBXeB\\cB\\aB`@_Bb@_Bd@}Af@{Aj@yAh@yAj@wArAiDf@sAd@oAd@oAd@oAb@oA^oA^qA\\oAt@cDVoAToARoAPqAPqANsANwAJuATkDHwADwADyABu@BqB?O?O?m@?_@CwDEuCAy@KiECgBAeF?qABgBBiBDiBFiBHiBJiBHiAb@}FHy@Dc@PcBJkArAsMn@oGNqAXoCb@mEb@oEb@iEd@kELmAf@eFRcBReBRcBTcBVaBV_Br@aEZ}Av@_EtAeH\\cB|@uEjCgNz@iEtAkHjDqQx@eEnBcKhBaKt@qERqAX_Bn@aEVaBXaBV_Bp@cEp@cEr@eEvAyHp@iDv@{Dx@uDx@sDZwAz@mDR_Ad@mB|@qDxAqG\\{AZ_BXaBTcBTcBPiBLeBLgBHiBDgBDgB@gB?eBAeBCeBIgEEeBCcBIiEKkEImECeBCeBAeBCkE?mE@eB@gB@gBBgBBiBDgBDiBFiBFgBHiBHgBHeBNeCF}@VuDJwALwA@KTaD\\{Ep@aId@aGXqDFs@HcAb@mFXsDJmAP_CH}@JyALyAToCP}BJ{AFy@RyBJwALwABWF{@Fs@RqBZ_DNkANiANeANaAb@_Cb@_Cj@cCTcAVgAv@qC^iA^iA`@kAd@kAb@iAf@iAf@iAvAsCl@gAn@gAn@iAp@gAp@iAh@aAx@uAr@iAp@iAdBuCp@iAp@iAp@gA`BqCp@gA`BqCl@gA`BmCVc@NWZg@\\k@~AoC~AsCn@iA\\q@~@gBl@mAp@wAh@iAl@sAj@sAvAkDh@wArAqDd@yAf@yAf@yAd@yAd@yAd@{AhAuDjAsDvCoJd@{Ad@}AhAyDbA_E`@_B\\aBZcBZeBn@kETeBPeBPiBNgBNgBJgBHeBFeBJmE@eB@eB?eBCwBAcBCqAOgEGaBKaBMaBM_BOaBWsCOkBCWu@sHa@eEAMWmCKcA_AwJSyBOyASiBMcAUaBa@mC[kBa@uBi@kCYkAq@mCWgAcA{EWs@IUM_@Sk@a@gAIUUs@a@eAc@eA]eAy@iCoAyDY}@U}@GUOi@WgAOq@Os@Mo@O{@Ko@Ii@Ik@Gc@Gg@Gg@Gk@Gk@Gm@Ei@Em@Eu@Ck@Cq@EkACm@EiAA]Aq@Aa@G}BCoBEqAAu@Aw@IqDK{DIuBEcAO_CEg@C_@M{AMuAKaAMeAGc@OaAUwAWuAWqAWiAS{@YiAMc@_@uAWy@_AoCs@iBw@iBg@eAO[MU[i@We@i@{@m@_Ag@u@Y_@[_@k@s@o@u@UWmAmAu@s@QOuAeAs@g@m@a@w@g@{@k@YQ}AeAs@c@w@g@y@i@oBqAQMSMoAw@aC}AaBeAaAo@w@i@y@k@_Aq@s@k@qB_BcAy@kDyC{@s@yBiBq@k@a@]g@a@c@]i@_@a@Ye@[SMe@Yg@Y[Qg@W_@S_@Qc@Uo@[YOUMmAk@{@e@_Am@y@k@sAiAMKWUYYY[i@m@q@{@q@_AIM]i@GIm@eAGMKSWe@Wk@Q_@q@cBu@sBk@oB]uAU_A_@oBWyAU{AQyAOyAM}AI}AI}AI_BM_DImBGwAI}BKiCKyCIiBOkDIeCCe@KsAKuAOwAMuAQsASqAUqAYqAS{@y@cDa@_B]oAc@cBu@sCs@oCg@kByAuFy@aDm@{BmA{Eu@}Co@kC[wA]_B}@cEYqAs@kDkAiG_@uB_@}Bq@aEU{AU{ASqA}@yGe@sDa@eDKw@MmAq@qGk@kGe@wFYuDY{DQqC]{GWyFWiGUgHE}AGeDC{AAkBAiAMyDA}AA}AA}AA_B?gCAgA?mA?aB?iB@wABaBF{ED{DD_DLcHRsJD{ADyAt@yYJqEHeE@g@BcADsADqCDwDF_EDgEBqI?gB?uFAgDA{@AiBCsCCqBEcCE_CGiDGyCEwBMqGSeJIsCMmECy@Cs@IqBKgCEmAGsBIuBQ_EMqCa@}Hm@gLIaBEk@WsEWmE_@wGo@oK_@yGOiCEq@]oGk@}J]aGQuDIoBI_BG}AQgG]wOEeDe@e]SaOCoAE{CCqCGyFUqPEeESyMKiHImFG{FG_EI}CEqDKsDMwDIqBCeAQyDMkCOmCS{DI}AOcDO_EGqAEmACq@GmBEeBEkBC}AIcFKgJE_EGmFEuDGsFEoEMcLGyFM_KI{HMmKEgEKoIE}DC_CEwDImICoBAq@EaDA{@Am@CeCAa@CmBAoAEcFCgBAaA?eC@mB@e@Lw@D[Fo@Jw@Jw@Ls@Pu@Ps@Tq@Ri@BEXm@Zo@Zk@^k@b@c@`@a@ZYRQLI\\UPKTMTKZMXK^K\\I\\Id@Kd@Kd@Kp@Op@OXGPENEPGRIn@YZGx@Oz@Mx@QlA[f@K`@If@Kl@Kx@Q|@QfAUv@Q~@QbASbASbAS|@Qp@M~@SrAWhB_@rAYpAYrAYlAWr@Or@Ot@OdAUx@Qz@Q~@SbAUx@QfAUbAU~A]`B]hAUrAYfB_@hBa@nAWtAYfAUzA[jAWzA[`B]rAYrAYfAUxA[~A[nAYnAWxA[fAUbASz@Ql@Mp@Oj@M`ASt@OtA[|@Qj@Mt@O^Gd@KlBa@pBa@hBa@nB_@rBc@~Bg@nAY\\Gl@Mf@Md@Kn@M~@Sx@Qp@OfAUr@O|@U|@WdA]f@Qv@Yf@Sj@Un@YhAi@BAbAi@`@Uj@[n@_@p@c@n@a@d@]l@c@d@]h@c@`@]d@a@b@]fA_Ap@s@t@u@l@q@j@o@n@s@l@u@tAkBLQV]t@gALQ\\i@`A}AVc@`@q@d@{@\\q@d@}@f@cAd@cA\\u@`@_Af@mAb@kAf@sA`@kATm@\\eA\\gAZgAZgAv@mCXiAZkAFUDQTcAJg@F[FYJi@RiAN}@Lo@V}APmA^_DTgBVwBFk@Hy@Fm@RyBT{B^yEZkDJiANcBLwALsAJsAXiDLoAL{AXiDZkDLqAFm@B]NgBZoDHy@PwBJeAFs@Fu@Fm@Fo@JoAJeANeBBg@TaCXgDXeDXeDTmBf@}F^kEVqCT_CJ}@Js@RkANq@Po@Rm@Re@P[T_@T[TYNO\\[ZSb@WTK^Od@KhAMjAGdACp@?p@Cp@Ch@G\\GVG\\KTIRIVKXOVOXSZWh@i@`@c@f@k@d@k@d@m@h@q@`@i@`@g@d@m@h@s@j@u@d@m@p@}@dAsAbDgEf@o@h@s@xAmBtAgBpAcBbAqAv@aA|@kAlA}ANSb@i@^e@NSx@eAz@cAf@m@h@q@Za@l@u@xCkDhBcC^e@d@o@V]TYjA{AlA}AdAuArAcBrAaBnAyARWrAiBT[fAwA`@k@f@o@~@oAx@cA|@uAj@}@f@_AbAmBp@{Ad@kAb@mA`@iAX_Ad@cBXkAVgALm@Nw@Ls@Jm@Jq@Js@Fg@Fk@Fi@Hw@De@Fu@Fw@Do@FiAHoBD}ABuC?mE?yCA_D?s@?k@A_A?[AqBA_EA}A?_BA}A?kCAqC?S?oIAoI?aD?cE?sA@iD@gCAsD?i@@_DAiD?_E?mE?eDAkCCmECuEAeDC}EAgBC{BAkDAcD?gDAmEAiGAsFA}DAkHAmF?uCAoEAcIA{DAkEAyEAeG?gDAmFAuDAaD?aDAmEAyFAeFAyG?uCAsEAsC?mB?cDAeDA{DAaH?wEAgFAaE?}CAwD?{B?yC?oC?qACw@?}B?eA@aB@cB@cBDcBDcBFcBFeBJcBJcBJaBN}ANkBPwAReBPyAD[L_ARaBJw@L_AL_AJu@TcBXsBDYFa@Fe@D]D_@Fi@Fk@Dc@BYB]Be@Be@Bq@@g@@g@?m@AeAC_ACs@Eu@Em@Gu@I}@Gq@Gq@KgAO_BwByUcA_La@mEOcBKgAIcAKsAIwAGwACw@CgAC{AAgB?qABoBFiCDkADkAHsBFgBFiBHsBHqBF}AFwAFsAF}ADoAR}FJwCBy@LgDLaDLqDN{DLsDF_BFwATyGHsBHmBNeEVwHf@sNHeCBq@D_AD}@Do@Do@Fs@Fm@Hq@Hg@He@Ji@Je@Li@Nk@Pk@Rm@Na@Pc@N]P_@R_@Vc@Va@^i@b@m@`@i@\\c@Za@\\c@fHaJz@gAr@}@f@o@r@}@V[RWPSTWXYVWXUXSZS\\S\\Q^Q^OZK\\K`@Kh@Mn@O|Cs@|@Sr@Or@Op@Ol@Mp@OpDy@vA[lAWz@Qz@Sn@Ol@Ol@Qf@Qf@S^QbAm@p@g@l@g@v@{@l@w@j@y@h@_Aj@iAd@kAVs@^qAZsATmARsAJw@De@Hs@F_AD{@B{@@w@?uACsACu@GgAEm@O{AIy@Is@Ku@Kw@Is@QmAMgAYgBe@sDg@sDGe@YuBUaB[}BKy@WmBWkBSwAUeBOiAMaAG_@Io@CSIo@Ik@Gc@EWE[QoAS{AYwBS_BYcCSgBUaCSiBWcCOwAO}AM}AKoAAGMoAOqBY}DUaDIuAOcCAMGqAS}DGuAG}AMwDYsKC{@E_CCeBAuAAiA@kCBwEBaAFkBFcBFqAH_BLcBL{AJmAN{ARaBRuAVgBF_@Ju@VwAp@kDb@iBRy@XcALg@Pq@bAaDHWp@uBfAoCb@gAd@gAFM^w@f@kA`AwBb@aAx@iBrAuCfAcClAgCf@gAr@}AZq@r@}Ah@mAh@iAhAcChAcCf@gApAsCbAyBlAkCjAoChAsC~@cC`@kA\\eAZcAh@iBf@aBh@qBZqAXmAVmAVoATkAVoAPiAXoBd@qCTyAb@oDZ_DXgDXqDRmDLmDF{AFyB@o@D}ABkAD{BHaDHiELkGHuB?q@?c@JaCDyAFqAFqAH{AH_BJgBHmARoCP{BLyAPmBJiAVaCTuBRaBH]ZgCT{AT{AT{AV}AV{AJk@ReAVwA\\oBLo@ZeBZaB`@sBNw@\\iBTkAVqAXyATkAVqAP{@ZaBVsA^oBVqAZeBVyAVyAVcBTyAT}AT_BT_BPwAP{ARgBLmAN_B^}DHeAJiAHcATwCZsEZcEN}BTqCPuBVmCP{A`@eDTcBh@uDh@yCf@eCT_ATeAXkAn@eCr@iCZgAx@mCz@kCz@gCz@kC|AuE|@kCdAcDZ_A~@uC|@qC^mA^sAXiAZkAZuAZoARcAXqAVoAVyAReAN}@PeATyAJo@RuAHg@d@{Cd@aD`@qCVgBd@sDT_CXqCRsBP}BNmBPmCVcERwCDm@H{AJcBLoBHoAVaDV_DJeANeBPkBRgBRcBTeBViBViBVeBXcBX_Bf@kCv@cERgAJi@b@yBR_Ah@gCj@mCn@uCn@{Cp@aDr@aDp@eDr@mD\\iBReAn@sDPeADUj@wDT}AR}AR}Ad@}D`@aE^aEZcEVeETeEPiENgEJeEHaE@aBB_B@_BB}DBwD@qD@sD@wABkDBiDBcDF{CFuCFqCHuCH{CJ}CLcDNkDPsEJuCF{ARuFDs@DmA@q@@YFyADiADu@D_AHgCPgEFcBNcEFaBB_B?M@a@?Q@]?[@cA@qB?mAC_BAm@Aq@Cq@Am@EaBI_BGcAO{BO_BOaBQ_BS}AU}Ao@wDY{A]yA]wA]wAa@wAc@sAc@sAe@sAg@oAg@oAi@mAk@kAm@iAo@gAo@eAq@cAq@eAs@_Aa@g@_BoBq@u@c@a@w@y@u@y@w@{@kBqBw@{@mBsBu@y@u@y@u@{@u@{@u@}@s@}@u@_ASY_@g@s@cAq@aAw@mAg@_Ao@gAm@iAm@kAm@kAk@mAi@oAk@oAg@qAg@sAe@sAmB}Fc@wAQo@Og@a@wA]sA_@_B]{A[{A[{AY}AY}AW}AU_BU}ASaBS_BQaBQcBUgCIaAMeBKeBKeBIgBGeBGgBEeBEeBCcBAaBAaB?}A?_B@_BFcEBcBDkBD{AFeBHeBJeBLeBLgBNeBNeBPcBPeBTcBRaBVaBVaBVaBX_BZ}AZ}A\\}A\\{A^{A^{A~@wD`AqD`@}A`@{A^{AbAuD`AwDv@{CH[bAwD`AwDbAwD`AwDbAwDbAyD`AyDbA{DbA{DbAwD`AyD\\}A^}A\\_BZ_BZaBXaBVcBVcBVcBV{BNoAPgBPcBNeBL}ANeCLeCLoCJgCDqB@y@B}@BeA@wC?iA?kAAkACyCCsACgACmAEkACkAKyCGmAAkAGeBEmAC}@CoAEcCCaBAwB@iEDmDFmCJqDJyBDw@RkD\\qEVsCNwAVuBRaBZyBV}Ah@cDp@gDt@iD^}Ad@gBx@yCj@mBf@{An@mBj@_BxAoDlBmEbB{DfAgCdAaCfAeCfAgC|AqDhBiEf@oA`@eA`AqCtAiE~@eDt@wCj@_Ct@kD\\eBh@aDp@qE`@mC^aDh@qF`@iFLoBPyDNaEF_CDsBDkC?iFAuDC{CG{CKcDKkCEaAQaDIoASaDOgBU_BSmB[sDiAyLQkB}A_P]uDO_Cq@{G[gDyAqOyAePcAuKk@aF]aCU{AUoAYsAWmAU_AU}@]oA{@sC}AuFuCkKc@_Bm@uB{@}CmH{WiAqEu@gEq@_Fi@_FQwBKaBKqBKyCEgDCkH?qR?uBDqi@?u@?eIAaIG}CKwDG{BQoCK}AM}AMeAOiAc@_DmBmLm@iDw@sEMs@mFo[e@qCc@eCuDoTuCqPgAiGMq@[iBe@qCcBkKEYQwAYaCa@{DM{BQiCQiFk@qPwAkb@s@wROkCM{AEo@YeCOsACQy@eF{@qEkBuImByIqDyPoCuM{AiHs@kDm@}Bk@sBoBkGwHsTyBuGoAqDwAkD[w@y@mBgF}LsB_FuAeD[w@Sc@a@qAk@iB_@qAUu@}@kDi@sCk@yCm@oEa@mD[_DsAoNg@qFcAeKEi@q@cHaF}g@o@oGe@{EwC{Ye@oE_AgHu@iE{@sDQq@Sy@WcAo@oBm@iBSm@m@}Ai@uAcAuBu@{Ao@oAUa@cCiDqB{CeAeBuB_EaB}Cs@iBk@{AK[o@uB]oAI[{@cDo@}Ck@eDQiAMs@K_AQmBCWKcA[wCKgAWaCIy@S}BSsBSmBGc@YoBg@gD_@kCCSAq@BCBGBM@O?MAQCKEKEGEEECGAG?G@GBEBGFMAOASCSCYKGC{@[aA_@o@Wk@Us@YqAg@aA_@_Ag@_As@k@s@KOKQKSO]Si@KYGQIWMa@Mc@i@kBqAmEW_Aw@kCiA{Dk@qBm@sBi@cBi@gBMa@IWIUM[KUMWMUS]k@{@m@{@g@s@y@iA_E{FeDyEU[Y_@Y]c@g@s@w@_CgC{AcByAeBiA{AeCgDcAuA_@e@g@o@c@i@Y]Y[e@g@_@_@u@s@gEyDi@i@c@e@_@g@_@i@[m@Yo@Ws@Su@Sy@O{@O{@Y_CM_AMaAO_AS}@W{@Yw@_@u@_@s@_@s@a@s@c@q@c@q@c@m@W_@KOc@m@a@o@_@s@[u@w@qBu@mBu@oB[s@]q@a@m@c@g@i@c@g@a@g@c@qAeAsAeAsAgAsAgAsAiAsAiAsAiAQOYSi@e@i@c@k@a@k@]k@Ym@Sm@Qo@O}A[k@Om@Ui@[e@a@g@e@iAqAiAqAkAqA_AoAi@y@_@q@a@q@_AiBaAiB_@s@KSS_@_@s@OYOY_@s@]s@[u@Yu@Uy@Qy@a@uB_@kBqAwGu@wDG]{AeI]iBm@}Ci@oCUkAm@{C_@kBq@kDe@aCMq@I_@_@oBQ{@Ke@Oy@Q{@Oy@Mq@Ms@GYMk@Ow@WeASi@Uc@OUKMIKKM]]i@]UMk@[SM}@k@OIg@[a@U]Sw@e@mBkA_Ak@]SYQ_@UqAw@YQ]Sk@]aBaAIMOK]Ug@]kAw@eAu@i@c@a@_@g@e@e@g@a@g@W][c@_@k@[i@]o@Sa@[o@]u@Wk@[s@Uk@oByEyAmDmAcDyF{No@gBeAaC]s@s@yAm@iAc@s@c@o@[a@s@{@a@c@k@k@y@u@WSg@a@i@_@k@]WOy@c@a@Sc@QWKUISG_@MWI]K[I[IUGYIi@Oa@Mu@Sa@M]Ka@Kg@Oa@K[I]I_AWoAa@c@Qg@Sm@Yi@Wi@Wk@Yk@]c@Wu@e@e@[k@c@_@Y]YWSc@_@o@k@a@_@aAu@m@i@i@c@{@s@i@e@c@_@k@e@][{@s@g@c@g@a@eA}@aAy@cA{@eA}@oAgAu@o@i@c@cA{@q@k@_Aw@aAy@kAcAe@a@w@o@kC{Bi@c@o@i@i@e@g@a@a@]_@[]Yc@_@a@]e@a@g@a@_Ay@eA}@cCwBaBqAwCkCmEyD_BuAsAwA]YkAiAsCoCgAaA{@u@{@s@wCgCg@c@UQQOg@a@i@_@i@_@i@[m@Yk@Wo@Uo@Qm@Oq@Km@Ig@Ce@?m@@o@A]@q@?o@Ho@Jo@Nu@Ra@L{@\\k@Xg@R{BfAi@T_Bh@{@Rg@Jm@Hi@Dg@Bg@@u@Am@Ay@G_AMw@Ow@Uy@[o@WSKk@Wc@Ym@a@s@k@uAwAMOm@w@k@y@i@}@IQOe@i@iAcAiCc@sAe@mBOo@SaASiAO{@Kq@Io@KcAO}AGq@Gs@O}AUyBWoCM_BQwCGoAEaAGeBQ_FEaAEwAIwBMiDIuBQ_GSyFEgAC}@EcBE_BQmBKsA]{Ce@mCQ_AgAeGg@oCO{@wBiLc@aCg@mCw@eESeA{@mEeBgJ_AaFk@{CWoASoAUsAe@gDQsAOwAQwAOwAi@uGK}ASaEOeECo@Au@EeBCeBCoE?sE@gBBiBJsEFgBHgBJgBVoENeB^kEPeBNeBPeBV_DXoCv@{ILuAH_AToBNeBPeBp@oH`@kENeBPeBPsBLsALkBHyAHaCD_AB_B@wA?u@?U?{@A}@EaBG_BI_BW{DO{AQ}AS{AW{AWyAESUcA]uA]uA_@qAc@oAa@mAe@kAe@gAi@gAi@cAwAaC_ByBo@y@s@w@iBgBs@m@i@_@_C}AgDiBgBaAq@a@eBaA_@Sm@]iAo@yA{@m@[aBaAeAw@g@a@o@k@[[c@g@a@g@a@i@a@i@_@m@e@y@Uc@[o@w@cBc@cA_@kA]iA[iAIa@Oi@YkAUmA_AiFSmAk@yCSmAG]]aB[gBg@kC]{As@uCw@wC[kA]kA_@kAaB}Ea@gAq@}Au@cB_@y@q@wAaAmBsAeCu@qAw@qA]i@i@y@o@_Ai@u@eEaGiBgCaL_PsByCmAkBq@eAaBmCcBsCi@_Ai@aA}A{C]o@{@cBc@}@gBwDuA_DiAqCw@mBy@uBeAoCi@yAYw@a@mAw@aCuAoE_@oAYcAW_A]sAYgAe@sA]oACGWgA[qA[qA[qA[sAYsAYsAMo@e@wBYuAWuAWwAUuAWwA]yBc@aDSsAUwAQgAU}AQuAWsBQ}AOqAMkAMmAU}BKgAOcBS{BIaAM_BQcCGy@K_BIuAKgBI_BIaBIiBEmAImBCq@C_AEiAEaBIaEIoEKwJCcEG_GC{DCeDKsJCgCCuBIgLEyCEmBEoACi@GcAIkAKkAIu@MaAOeAO}@Ie@I_@Oo@Ka@Oi@IWMa@M_@Wu@a@aAO[Yk@Q[c@q@U[_@e@m@o@g@e@eAw@[SUM]Qa@QWKc@OgAY}@Uq@OgAWcAW{@Wi@QcAa@c@S]Sa@Yw@k@WUk@k@q@u@o@y@c@q@Ye@]o@Sa@Wi@Se@e@qA[cAOg@Qo@Mi@Ou@O}@QkAUiBOuAMuAKwAMyAKwAMyAKwAMyAM_BKwAK{AGeAKoBGsAQuDO_DImBKaCG_BIwAMyBCw@SiGm@yS}CueAMkEGcCGsCEqBKoBEoAIsAC]Eu@KsAKuAKuAIuACo@Cw@CeAAyA@wAB{ADyAD{ABs@HyBBgB@aA?YAyACmAA[Co@ASAQC]C]C]C[C]CYMoAE_@Gg@E[Gc@Ii@Ii@Ie@Kk@G_@UyAUsAY_BQcAIc@Mq@Ie@G]Ms@Km@UqAUsAUqAUqASqAYcBQ_AUqAUoAUmASkAe@qCWsAi@yCUmASmASmAOoAOqAIsAGuAAuA?uABuAFqAFgAJ{AHkAHmAHmAHsAFiADaAD{ABiA@cCAiACqAEiAEaAGiAGqAGiAGgAGiAWiEIwAGiAGkAIuAE}@IiAOqCOqCEq@QiDMgCc@kIQsCIiAQaCWiD]qEGu@Go@Go@Gm@Iq@Im@Ik@Km@Mq@Mq@GYEQOm@Qm@Qi@Qe@Uk@Se@Wk@Wg@Uc@Ua@Wa@[e@]e@a@g@a@g@c@g@gHaIk@o@]_@]a@]a@a@e@a@e@[a@[c@]g@]i@[g@]k@Yg@Yg@u@}Ai@kAa@aA[u@Wq@_@eA]eA[cASs@Uu@]uA[wA[wAWyAWyAS{AS{AKw@Ec@O}AM}AK_BI}AG_BE}AAcACmCC_EAkA?}DA}DA}ACwB?]?e@GsDGuAGuAKqAKuAQqASsAk@_DYkAK]Qs@Uy@[}@_@y@[w@CGYm@_@s@]o@_@k@[e@a@k@]c@_@a@]_@][YYYUUSQQOQIOIQGOAOCQCMGMEIKIOGMAK?IBIFGFEFSJMDM@MAOGUO[]UWOOUUQMWOUM[OYMQIMG[QaAk@SMSMSKKCG@s@_@y@c@y@]gAe@[OGCaAe@c@Us@y@oAkAY]a@o@Ua@a@gAYeAKk@Ii@Gq@Cg@c@sICeBEoBAq@Am@C{@EuAAa@Cw@EoAEgAC{@Ck@I{BGgBGoBGwBG_CEkBEmBCcBCyACiBAkBAeBAaB?gB?sB@oB@oBByBBwABaBDsBDaBDsAD}ADsADoAFyAFoAFoAFmAHyAJcBJaBLiBLcBL_BNeBN_BN{AN{ANuANuALiANoAPuAR_BRyARyAT_BdAiHVcBT}APoANiANkALiALoAJiATyCJkBDo@DyAF}BD_D?wCAoAEaCEgBKwDGaCKmEIwEAeAAmB?}C@aCB_CB}ADkBFmBHoBHeBL}BLiBNqBNkBJeAJ_AH{@ReB\\iCXsBZmBb@mCX_BNy@TmALq@Ny@^sBRmAVgBLaALeAHcAF_AB_@FiA@[@c@@g@@q@@oCCqBGsBKkBG}@KkAS}BSiBUsBOcBMoBEeAAq@Ai@Au@?cA?W?Y@[DgBFyDB_AB}@B_ABmB?mA?kAAq@C_AGuAG{@I}@K}@OgAW{AY{AUcAa@_BSu@w@{C[sAMi@Qy@SgAU{AQ}AM{AEs@Cw@Am@AcA?}@BgBFyAF}@ZoCVoBVuAVwAh@wCPcA`@mBVsA\\wAx@{C\\iAb@uAdAwCf@mAn@uApAgCdAgBr@iAp@_Aj@u@r@{@bBkBx@w@t@u@`A_AzCsCvCwC|AgBrAiB~AoCpAoC|AmDpAwCdA}Bj@qAt@eBtBgFXw@d@}A^wAVoA`@_CR}APgBF{@Ds@FgBFiD@_C@eC@qD?k@@qE@wA@sD?}B@qB?yA?kA?}AAcAAk@Ag@Cy@Co@Cc@GiAMeBIy@MkAMcAIi@Ic@Km@UkAQ}@Qs@Me@U{@Uu@a@kAYu@m@yAa@y@g@cAu@uAeAgBcAeBaAaBu@}Ak@oA_@{@[w@M]e@sA_@eAK][aAg@aBg@_Bm@qBsAmEqAaEqA{DgBeFc@kAe@mAmA}CgAkCqA{C}@uB_@w@oBmEcCsFi@mAYq@O[i@mAi@mAGOkAqC_@{@KUg@sAc@eAwAuDM_@KYwAaEg@{AYy@Qm@a@oAe@{AcAkDq@aCk@wB_@{A]uA]wAk@eCi@iC]}AWuA[aBO{@SoAUwAWeBOkAOiASkBK{@K_AI}@OeBOkBIoAG_AGcAIeBGyAGiBGuBEiBAs@Ao@AeAAsB?aB@cB@aCBgC@g@BkAB_ABu@Bs@LiCNuCLqB^kFFy@LeBXuDT_DRyCLuBPcELsDF_EDaDBwEBqG?yBD}FDyDHqDNcE`@kHPcCTiCRyBNwAP{Ap@{E|@cGx@}En@yDf@eDx@uGj@gF`@wEVwDXoFDaAHaCB}@@u@BcBBkC@qD?yB?aC?cC?{C?wB?gDBiDFuEFeCFkBHeBHiBPwCViDXcD^kDj@sEn@kEr@qEfAuGv@sEn@aEt@aFp@oFNyAZ{CTaCNiBRwCRmDRgEJkCFoBFiCF_FBqB@gB?kCAyCCqCEyCEqBKcDGmBCm@IaBGuAI}AKiBOmCQyCUoD[eFMwBGmAE{@GmAIgBK}CCy@G_CGwDC_EAwEBqFFmEHmDLyDHsBLuCDiAD{@FiAFeAL}BV}ELeCJgBHwAHwAH}AHiBLoCHgBHuBHwBFiBDqAFeCDkBBoAF}DDmE@yB@uC?iB?kB?qBAeBA}ACaBCgBCgBC}AEuCEwBA_@Cy@EaBEeBI{CG{BC}@A[GiCI{DIiEGeFC}DAmC?oB?eC@yDBqDBwCFeDH_EFeCHiCH{BHoBHiBPmDT_El@oJPeCJcBFs@NwBT}CTgDVqDNeCJcBNmCToEHoBHoBFeBNaGHeEDmCD{DBoD?qB@kEAuA?k@A{CCyDGcFMoIImEKuFIwFGoHCmF?gD@wCBkDFiEDuBJaEFoBFgBHgCFyAHwBF{AH{BF}AFaBFqBFyBDuBDsCBwEAkEE_EIqDK_DQoDWcEYuDUqCSyBg@uF[cDMqAWkC[gDIaAOeBQyBKwAIkACc@GaBEaAC_ACq@]wKIuBGiBCkAEeAEm@Cg@C{@Ci@EmACy@GiBEaAEsACw@E{AEsBCcAGiDEaCGeDI}DG}BGeBGgBG{AGwAImBKuBIcBMiCIcBKsBMiCGqASuEKcCMyDMoFEmBCoAAgA?i@C}CAsAAeE?}A@eB@eCDuDBcCDqCHyCPoFJiCLoCV{EVwDVoDV}CPuBLoAPcBPgBh@sEh@aERyAXoBl@}Dv@uEn@mDXwANw@ZwAv@wDXmAn@kCv@}CbAwDhA_EbAiDlA_EdByFjA_Ex@aDNo@V_A^}Az@yD|@iEv@wDb@wB|@cEbAcEz@aDd@}Ah@eBdAyCrAiDzBgFrBgE`AoB~@aBhB_DrAaChBcDpCgF|A{C`AqBlBcEn@{Ar@aBrA{C|AsDjAmCbA{BhA_Cn@mANWZk@DIh@aAFKp@kAh@y@n@_Af@u@r@eAXa@RWRW`@i@xAgB~@cAfAiAx@w@|@y@f@c@^[f@a@NMPMn@e@r@g@~@o@dAq@~@i@~@g@p@]~@e@xAq@b@Q`CaALEPGhA_@z@YzAe@tA_@XI~@U|A_@lCk@nDk@hFq@|AOvAM|@G~CUrBMZCTAVAv@EtCO~AKnAIxAKbAIvAM`AKt@Ip@Ij@GfAOpB[fCe@`ASd@KfAWfBc@d@MPEv@UfBk@n@SxBu@t@Yv@[r@YjBy@hB{@t@]r@_@n@[z@c@hBcAt@a@t@a@t@a@r@a@r@a@r@_@hBcAr@a@t@_@TM\\Sp@_@r@a@p@_@p@_@r@a@p@_@p@_@fBaAp@_@p@_@r@a@p@_@t@c@dB_AbAk@NIPK`@SRMv@c@x@e@v@c@z@e@~@g@|@i@l@]`Am@z@k@v@k@|@m@~@u@~@u@v@q@rBoBxB}BtBeChB_Cr@eAv@mAjBwCl@eAbBwCr@mAl@iAVe@h@aAZk@Zk@NYb@w@b@w@d@{@tAeClBmDXg@d@w@R_@R_@lBkDbCoElBmDz@_BxB}D|@_BtCgFf@y@b@u@d@w@h@}@n@cAh@y@d@s@h@y@d@q@f@s@f@q@j@u@l@w@j@s@j@s@f@m@d@i@h@m@f@i@vC{Cn@q@n@o@d@c@h@g@j@g@f@c@l@g@p@k@j@e@t@k@r@i@x@k@r@g@t@g@r@e@`Ao@z@i@z@g@x@e@z@e@`Ai@v@a@r@_@p@]z@c@v@a@p@]|C}AzAu@VMb@EHAJCLENGJEPIrEqB`@Q\\MZKVIPEDAXGVE\\E`@EZCb@C\\AjACxAE\\Ab@CZC\\EVEXGZIVIVITIVKTKNINITMTMTONKROZWXWVWVYV[X_@Zc@d@q@|AaCT]RYV]V[X[Z[XWHINMVSXSXQZQ`@S^QZM\\MZKb@M\\KJCJEr@Wl@Q~@Yn@StBg@`B_@fAUp@MpAUl@Kx@MFAdAMnC[fBOfBId@C`@C\\AvAGf@Cz@C\\Ad@CfAC|@EhEMXAd@AjAGbACb@Cr@CjBIxCKbACLAl@ClAEpAEzBIxAGvAE|@CpCGp@AbBAbB?fA@fABr@BZ@d@Bh@B^Bv@Ff@D|@H^D|ARl@Hf@Hd@HlATf@JRDVFLBd@Jb@Jt@RbBd@XHd@Lf@Nn@Rj@NTF`@Jr@Pt@RlA\\vA`@pA^dAZrDfAJBl@PZHb@Lp@Pv@Tt@Tz@VnDdA|@TTHd@Jz@Vz@Vd@NrA`@\\J^LRHxAh@b@Nf@Pd@Pj@Tn@VbAb@~Av@d@VlDtBz@j@t@h@`BnAv@p@p@l@lBbBxBtBvBvBxAtA~BzBjBdBjBxAzBzAhAn@xBbA`Bl@rA`@jAZtB^dCVhAFzBBzBEtAIdAKdAOnB_@|@U~Bo@vEwAp@SdDcAx@Wt@Ul@Qn@Ql@Op@Ol@Ml@Kh@If@Gn@Gt@KNALAbBKt@Ev@Cx@Ax@Ax@?lCClDCf@?~AAtAA`AAz@Cl@AvBCtBE`@AH?F?zB?rACl@AdACn@Cn@Cj@Cf@Cf@Cn@Cl@EnBIt@ElBMjBK|@EtAIvAItAGlBKh@Ex@Iv@It@Kj@Kn@OdA[v@Yr@]`Ai@PKv@i@bAw@lAgA`AeAd@i@^g@h@u@j@{@d@w@j@gAbAaC`AaC`@gARe@d@kAd@kAXi@NYP]P]N[N]Re@Tg@N]N]N[N]N]N_@N]N_@L[L[L]Na@Pc@Tm@~AgENa@L]L[N_@Na@Na@L[N_@JUFOFMFMNYJSLUNWPYNULQLOLMLKXYZ]XUVQZS^WZQf@Ud@Ub@O|@[ZIZILCJCZE^E^Ab@?J?F?Z@^DTBVDRDTBP@V?TBRJTFZFRBVBb@@L?RAH?d@@L?P?NALALCJELILMJMFKNH`@TnEhCv@d@RLPLNLNNPRXZp@x@Z`@h@p@d@j@LPFHJLd@h@^`@j@l@PTDFJLJJl@r@DDlAvARTt@v@j@n@X\\Z^p@z@PRRXHHJ@NKDIDMH?\\CFAXA"
//         }
//     ],
//     "meta": {
//         "userId": "flaky.camel.wrwd@flashpost.net",
//         "accountId": "",
//         "customerId": "cus_REwi3VK5zuloEm",
//         "tx": 5,
//         "type": "api",
//         "client": "api",
//         "source": "here"
//     }
// }
console.log(data.value)
async function search(q: string) {
  loading.value = true
  if(q.length > 2){
    const users: any[] = await $fetch('https://api-adresse.data.gouv.fr/search/', { params: { q } })

    loading.value = false
  console.log(users.features)
  return users.features
  }
  else {
    return []
  }
}
const state = reactive({
  selectedDep: undefined,
  selectedArr: undefined
})
async function onSubmit(event) {
  // Do something with event.data
  console.log(event.data)
  data.value = await $fetch('https://apis.tollguru.com/toll/v2/origin-destination-waypoints', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'JRt9BQ2J6R9tfrdGHPRgT8mJ6TMgJb63'
  },
  body: '{"from":{"address":"'+event.data.selectedDep.properties.label+', France"},"to":{"address":"'+event.data.selectedArr.properties.label+', France"},"serviceProvider":"here",,"vehicle":{"type":"2AxlesAuto"}}'
  })

  console.log(data.value)
}
</script>
<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <h2>Choisir votre trajet</h2>
      <UForm :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Départ" name="selectedDep">
          <UInputMenu
            v-model="state.selectedDep"
            :search="search"
            :loading="loading"
            placeholder="Search for a user..."
            option-attribute="properties.label"
            trailing
            by="id"
          />
        </UFormGroup>
        <UFormGroup label="Arrivée" name="selectedArr">
          <UInputMenu
            v-model="state.selectedArr"
            :search="search"
            :loading="loading"
            placeholder="Search for a user..."
            option-attribute="properties.label"
            trailing
            by="id"
          />
        </UFormGroup>
        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </UCard>

    <div v-if="status === 'pending'">
    Loading ...
  </div>
  <div v-else>
      <div>Départ: {{ data?.summary?.route[0]?.address }}</div>
      <div>Arrivé: {{ data.summary?.route[1]?.address }}</div>
      <div>Type de véhicule: {{ data?.summary?.vehicleDescription }}</div>
    <br>
    <div class="grid md:grid-cols-3 gap-4">
      <div v-for="route in data?.routes">
        <div>Nom du trajet: {{ route.summary.name }}</div>
        <ul>
          <li>Distance: {{ route.summary.distance.metric }}</li>
          <li>Durée: {{ route.summary.duration.text }}</li>
          <li>Péage: {{ route.summary.hasTolls }}</li>
          <li>Tarif péage: {{ route.costs.cash }} €</li>
          <li>Tarif carburant: {{ route.costs.fuel }} €</li>
          <li>Maps: <a :href="route.summary.url">voir sur google map</a></li>
        </ul>
      </div>
   </div>
  </div>
  </UContainer>
</template>

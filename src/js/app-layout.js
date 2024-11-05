import React from "react" 
import ReactDOM from "react-dom/client"  

const Header = () => {
    return (
        <div className="header-bar">
            <div className="logo_container">
                <img src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
    );
};
const Search = () => {
    return (
        <div className="search_sec">
            <input type="text" className="search_input" />
            <button className="search-btn">Search</button>
        </div>
    );
}

const ResCard = (props) => {
    const {resData} = props;
    const { id, name, cloudinaryImageId, avgRating, costForTwo, cuisines  } = resData?.info;
    return (
        <div className="card-item">
           <div className="card_img">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
           </div>
           <div className="card-info">
                <h3>{name}</h3>
                <div className="card_rating">{avgRating}</div>
                <p className="card_items">{cuisines.join(", ")}</p>
                <p className="d_time">{costForTwo}</p>
           </div>
        </div>
    );
}
const restaurants = [ 
    {
    "info": {
        "id": "437301",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/2adbbebb-def3-4cf5-9c91-6a60bb499695_437301.jpg",
        "locality": "OLD MLA Quarters roa",
        "areaName": "Himayat Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.9K+",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-16 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            "description": "Delivery!"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-dd219057-4832-40fd-a5ba-68c61f08b8c8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-old-mla-quarters-roa-himayat-nagar-rest437301",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "24613",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/575855d7-c502-46fe-bb27-b87a192b4d8e_24613.jpg",
        "locality": "Stock Exchange Road",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "19K+",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-16 02:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            "description": "Delivery!"
            },
            {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                }
                },
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹1199",
        "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "2.5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-dd219057-4832-40fd-a5ba-68c61f08b8c8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/dominos-pizza-stock-exchange-road-himayath-nagar-rest24613",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "17104",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17104.JPG",
        "locality": "Prime Plaza",
        "areaName": "Himayatnagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "33K+",
        "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-16 00:15:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-dd219057-4832-40fd-a5ba-68c61f08b8c8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/kfc-prime-plaza-himayatnagar-rest17104",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "32129",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_32129.JPG",
        "locality": "Himayath Nagar",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "83K+",
        "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-16 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            "description": "Delivery!"
            },
            {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                }
                },
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "8.8K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-dd219057-4832-40fd-a5ba-68c61f08b8c8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/burger-king-himayath-nagar-rest32129",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "23707",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/c3ea7f7c-f8b6-46bb-8259-dd5b794ab2c1_23707.jpg",
        "locality": "Himayath Nagar",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "69K+",
        "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-16 00:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            "description": "Delivery!"
            },
            {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
            }
        ],
        "textExtendedBadges": [
            {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                }
                },
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                }
                }
            ]
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "9.3K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-dd219057-4832-40fd-a5ba-68c61f08b8c8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/mcdonalds-himayath-nagar-rest23707",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "575804",
        "name": "Varalakshmi Tiffins",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_575804.jpg",
        "locality": "Paradise Circle",
        "areaName": "Ramgopalpet",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "South Indian"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "6482",
        "avgRatingString": "4.6",
        "totalRatingsString": "16K+",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-15 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
            "description": "Delivery!"
            },
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ],
        "textExtendedBadges": [
            {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                }
                },
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                }
                }
            ]
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-dd219057-4832-40fd-a5ba-68c61f08b8c8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/varalakshmi-tiffins-paradise-circle-ramgopalpet-rest575804",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "100942",
        "name": "Lucky Multicuisine Restaurant",
        "cloudinaryImageId": "yeyiqeakfhjj6cmeocsc",
        "locality": "Somajiguda",
        "areaName": "Somajiguda",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Biryani",
        "Tandoor",
        "South Indian"
        ],
        "avgRating": 4.1,
        "parentId": "18963",
        "avgRatingString": "4.1",
        "totalRatingsString": "56K+",
        "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-15 23:59:00",
        "opened": true
        },
        "badges": {
        
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "4.4K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-dd219057-4832-40fd-a5ba-68c61f08b8c8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/lucky-multicuisine-restaurant-somajiguda-rest100942",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "743166",
        "name": "Al Taza",
        "cloudinaryImageId": "b9896358058a0b743f4983ad2c045ace",
        "locality": "Mehdipatnam",
        "areaName": "Mehdipatnam",
        "costForTwo": "₹399 for two",
        "cuisines": [
        "Arabian",
        "Juices",
        "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "405299",
        "avgRatingString": "4.5",
        "totalRatingsString": "426",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-16 01:00:00",
        "opened": true
        },
        "badges": {
        
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
        
        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-dd219057-4832-40fd-a5ba-68c61f08b8c8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/al-taza-mehdipatnam-rest743166",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    } 
            
]
const Body = () => {
    return (
        <div className="body_sec">
            <Search />
            <div className="cards_sec">
                {
                    restaurants.map(restra => <ResCard key={restra.info.id} resData = {restra} />) 
                } 
            </div> 
        </div>
    );
}
const AppLayout = () => {
    return (
        <div className="app">
           <Header /> <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

 
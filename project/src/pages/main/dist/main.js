"use strict";
exports.__esModule = true;
var react_1 = require("react");
var location_1 = require("../../components/location/location");
var locations_list_1 = require("../../components/locations-list/locations-list");
function Main(_a) {
    var baseLocation = _a.baseLocation, offers = _a.offers, points = _a.points, onLayoutChange = _a.onLayoutChange;
    var _b = react_1.useState(baseLocation.title), activeLocation = _b[0], setActiveLocation = _b[1];
    var locationOffers = react_1.useMemo(function () { var _a, _b; return (_b = (_a = offers.find(function (offer) { return offer.location === activeLocation; })) === null || _a === void 0 ? void 0 : _a.offers) !== null && _b !== void 0 ? _b : []; }, [offers, activeLocation]);
    var handleLocationClick = function (location) {
        setActiveLocation(location);
    };
    react_1.useEffect(function () {
        onLayoutChange(!locationOffers.length);
    }, [locationOffers]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: "visually-hidden" }, "Cities"),
        React.createElement(locations_list_1["default"], { activeLocation: activeLocation, onClick: handleLocationClick }),
        React.createElement(location_1["default"], { location: location, offers: locationOffers, points: points })));
}
exports["default"] = Main;

var MapAzure = {
    client: undefined,
    initialize: function () {
        MapAzure.client = new WindowsAzure.MobileServiceClient("https://poop.azure-mobile.net/", "OleDjBSHAAhSOeEkZCpNWoFXYrThYw21");
    },
    SaveData: function (text, long, lat) {
        var itemTable = MapAzure.client.getTable("Item");
        var item = {
            title: text,
            longitude: long,
            latitude: lat
        };
        itemTable.insert(item);
    },
    loadData: function (operation) {
        var itemTable = MapAzure.client.getTable("Item");
        itemTable.read().done(function (results) {
            var length = results.length;
            console.log("len" + length);
            for (var i = 0; i < length; i++) {
                operation(results[i]);


            }
        });
    }
};
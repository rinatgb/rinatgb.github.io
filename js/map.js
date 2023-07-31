const button_health = document.getElementById('health');
const button_shops = document.getElementById('shops');
const button_education = document.getElementById('education');
const button_kindergarten = document.getElementById('kindergarten');
const button_entertainment = document.getElementById('entertainment');
const buttons = document.getElementsByClassName('map_tabs_item');

YMaps.jQuery(function () {
    var map = new YMaps.Map(YMaps.jQuery("#map")[0]);

    map.setCenter(new YMaps.GeoPoint(37.570111,55.721903),17);
    
    var style = new YMaps.Style("default#greenPoint");
    style.polygonStyle = new YMaps.PolygonStyle();
    style.polygonStyle.strokeWidth = 2;
    style.polygonStyle.strokeColor = "c79791";
    style.polygonStyle.fillColor = "#ffffff";
    YMaps.Styles.add("polygon#Example", style);

    var polygon = new YMaps.Polygon(
      [
        new YMaps.GeoPoint(37.570738,55.722930),
        new YMaps.GeoPoint(37.572106,55.721963),
        new YMaps.GeoPoint(37.569543,55.720886),
        new YMaps.GeoPoint(37.568204,55.721775)
      ], {
          style: "polygon#Example",
          hasHint: 1,
          hasBalloon: 1
    });
    polygon.name = "Knightsbridge private park";
    map.addOverlay(polygon);

    var lama = new YMaps.Style();
    lama.iconStyle = new YMaps.IconStyle();
    lama.iconStyle.href = "resources/lama_pin.svg";
    lama.iconStyle.size = new YMaps.Point(70, 70);
    var point = new YMaps.Placemark(new YMaps.GeoPoint(37.569936,55.722047),{style: lama});
    point.name = "Knightsbridge private park";
    map.addOverlay(point);

    var health = new YMaps.Style();
    health.iconStyle = new YMaps.IconStyle();
    health.iconStyle.href = "resources/health_pin.svg";
    health.iconStyle.size = new YMaps.Point(100, 100);
    var ph1 = new YMaps.Placemark(new YMaps.GeoPoint(37.567028,55.721893),{style: health});
    ph1.name = "Университетская клиническая больница № 4 Клинического центра Первого Московского государственного медицинского университета имени И.М. Сеченова";
    var ph2 = new YMaps.Placemark(new YMaps.GeoPoint(37.573463,55.724639),{style: health});
    ph2.name = "Клиника реабилитации в Хамовниках";

    var beauty = new YMaps.Style();
    beauty.iconStyle = new YMaps.IconStyle();
    beauty.iconStyle.href = "resources/beauty_pin.svg";
    beauty.iconStyle.size = new YMaps.Point(100, 100);
    var pb1 = new YMaps.Placemark(new YMaps.GeoPoint(37.569199,55.722139),{style: beauty});
    pb1.name = "Галерея здоровья и красоты iO";
    var pb2 = new YMaps.Placemark(new YMaps.GeoPoint(37.571175,55.723050),{style: beauty});
    pb2.name = "МильФей";

    button_health.addEventListener('click', function () {
      map.removeAllOverlays();
      map.addOverlay(polygon);
      map.addOverlay(point);
      map.addOverlay(ph1);
      map.addOverlay(ph2);
      map.addOverlay(pb1);
      map.addOverlay(pb2);
    })
   
    var shop = new YMaps.Style();
    shop.iconStyle = new YMaps.IconStyle();
    shop.iconStyle.href = "resources/shop_pin.svg";
    shop.iconStyle.size = new YMaps.Point(100, 100);
    var ps1 = new YMaps.Placemark(new YMaps.GeoPoint(37.571155,55.719836),{style: shop});
    ps1.name = "ВкусВилл";
    var ps2 = new YMaps.Placemark(new YMaps.GeoPoint(37.565883,55.723070),{style: shop});
    ps2.name = "Магнолия";
    var ps3 = new YMaps.Placemark(new YMaps.GeoPoint(37.574021,55.721830),{style: shop});
    ps3.name = "КуулКлевер";

    button_shops.addEventListener('click', function () {
      map.removeAllOverlays();
      map.addOverlay(polygon);
      map.addOverlay(point);
      map.addOverlay(ps1);
      map.addOverlay(ps2);
      map.addOverlay(ps3);
    })

    var education = new YMaps.Style();
    education.iconStyle = new YMaps.IconStyle();
    education.iconStyle.href = "resources/education_pin.svg";
    education.iconStyle.size = new YMaps.Point(100, 100);
    var pe1 = new YMaps.Placemark(new YMaps.GeoPoint(37.569234,55.720532),{style: education});
    pe1.name = "ГБОУ школа № 57";

    button_education.addEventListener('click', function () {
      map.removeAllOverlays();
      map.addOverlay(polygon);
      map.addOverlay(point);
      map.addOverlay(pe1);
    })

    var kid = new YMaps.Style();
    kid.iconStyle = new YMaps.IconStyle();
    kid.iconStyle.href = "resources/kid_pin.svg";
    kid.iconStyle.size = new YMaps.Point(100, 100);
    var pk1 = new YMaps.Placemark(new YMaps.GeoPoint(37.567756,55.720853),{style: kid});
    pk1.name = "ГБОУ школа № 171, СП № 5";
    var pk2 = new YMaps.Placemark(new YMaps.GeoPoint(37.568755,55.721913),{style: kid});
    pk2.name = "Russian International School";
    var pk3 = new YMaps.Placemark(new YMaps.GeoPoint(37.574687,55.720869),{style: kid});
    pk3.name = "ГБОУ школа № 171, дошкольный корпус № 6";

    button_kindergarten.addEventListener('click', function () {
      map.removeAllOverlays();
      map.addOverlay(polygon);
      map.addOverlay(point);
      map.addOverlay(pk1);
      map.addOverlay(pk2);
      map.addOverlay(pk3);
    })

    var coffee = new YMaps.Style();
    coffee.iconStyle = new YMaps.IconStyle();
    coffee.iconStyle.href = "resources/coffee_pin.svg";
    coffee.iconStyle.size = new YMaps.Point(100, 100);
    var pc1 = new YMaps.Placemark(new YMaps.GeoPoint(37.566942,55.722894),{style: coffee});
    pc1.name = "Бистро";
    var pc2 = new YMaps.Placemark(new YMaps.GeoPoint(37.574483,55.722303),{style: coffee});
    pc2.name = "Брусника";

    var movie = new YMaps.Style();
    movie.iconStyle = new YMaps.IconStyle();
    movie.iconStyle.href = "resources/movie_pin.svg";
    movie.iconStyle.size = new YMaps.Point(100, 100);
    var pm1 = new YMaps.Placemark(new YMaps.GeoPoint(37.567850,55.724216),{style: movie});
    pm1.name = "Детская сцена Театра Сатиры";
    button_entertainment.addEventListener('click', function () {
      map.removeAllOverlays();
      map.addOverlay(polygon);
      map.addOverlay(point);
      map.addOverlay(pc1);
      map.addOverlay(pc2);
      map.addOverlay(pm1);
    })

  })
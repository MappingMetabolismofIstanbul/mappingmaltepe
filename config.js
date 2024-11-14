var config = {
    style: 'mapbox://styles/mozzsbae/cm0z3u8t601a601pmgr0xcnx9/draft',
    accessToken: 'pk.eyJ1IjoibW96enNiYWUiLCJhIjoiY2w5MWthdTJzMWJjYzNucXZ1aXAxaTZqbSJ9.KZfzyAD2N9C0odsgNUrqHA',
    showMarkers: true,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Maltepe Dolgu Alanı',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'full',
            hidden: false,
            title: 'Maltepe Land Reclamation',
            image: 'https://i.ibb.co/qCBLx6Z/240628-Maltepe-dolgu-alan.jpg',
            description: 'The image was created for the project titled “Interactive Mapping of İstanbul’s Metabolism (MEF AAP 027) ” Funded by MEF University. Project Coordinator: Dr. Esra Sert, (2024-2025) // 2013 yılı İçişleri bakanı Muammer Güler’in 7/18755 esas no’lu soru önergesine verdiği yanıtta, maltepe dolgu alanının 1. etap anroşman ihalesinin, 65.267.758,89 TL teklifiyle akm yapı ve cengiz inşaat ortaklığına verildiği belirtilmiştir. Buna karşın, ihalede teklif veren bir diğer firma, Özka İnşaat’ın websitesinde, 1. etap anroşman inşaatı için 07.03.2012 yılında sözleşme imzalayarak sürece dahil olduğu AKM İnşaat+Cengiz İnşaat ortaklığının sözleşme tarihinden 1 gün önce, 1. etap anroşman işini resmi olarak yüklendiği görülmektedir. Bu durum, 1. etap anroşman işini yüklenen firmalar ve ihale süreciyle ilgili soru işaretleri yaratmaktadır.',
            location: {
                center: [29.11875, 40.92664],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            imageStyling: {
                width: '50%', // Genişliği %50 yapar
                opacity: 0.8  // Opaklığı %80 yapar
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'layer-name',
                    opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: 'Maltepe Sahil Düzenlemesi 1. Etap',
            image: 'https://i.ibb.co/XVJJxsz/M1.jpg',

            description: '',
            theme: 'light1',
            location: {
                center: [29.11875, 40.92664],
                zoom: 9,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/k00tm5p/gif-min.gif',
            description: '1984-2022 yılları arası Maltepe Dolgu Alanı değişimi / Google Earth Timelapse uydu görüntüleri kullanılarak elde edilmiştir.',
            location: {
                center: [29.11875, 40.92664],
                zoom: 11,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/nghKNmJ/M2.jpg',
            description: '',
            location: {
                center: [29.11875, 40.92664],
                zoom: 13,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/rwjWpNv/M3.jpg',
            description: '',
            location: {
                center: [29.11875, 40.92664],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};

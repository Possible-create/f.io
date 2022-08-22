//JavaScript
var GalleryIcon = `<svg width="24" height="24" viewBox="0 0 490 490" >
      xmlns="http://www.w3.org/2000/svg"
      xmlnsSvgjs="http://svgjs.com/svgjs"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="288"
      height="288"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <g fill="#fff" className="color000 svgShape">
          <path
            d="M165.1 4332.3l-65.1-65.1V1135.9c0-2872.9 1.9-3137.1 30.6-3181.1 17.2-26.8 47.9-55.5 67-67 23-11.5 553.1-19.1 1468-17.2h1431.7l1845.1-1024c1102.5-612.5 1864.3-1024 1893-1024 26.8 0 74.6 15.3 103.3 34.4 40.2 23 432.6 681.4 1502.5 2511.2C9235.6-269 9890.2 869.9 9895.9 900.5c19.1 124.4 23 122.5-1240.3 962.8l-1203.9 802-1.9 802v800.1l-65.1 65.1-65.1 65.1H230.1l-65-65.3zm6877-2872.9l3.8-2526.5-945.5 1887.2C5181.7 2655.6 5153 2709.2 5084.1 2741.8c-65.1 30.6-80.4 30.6-149.3 7.7-76.6-26.8-84.2-40.2-834.5-1351.3-415.4-727.4-763.7-1330.3-771.4-1338-7.7-7.7-258.4 227.8-555.1 524.4-511 511-545.5 539.8-610.6 539.8-40.2 0-91.9-9.6-118.7-21.1C2012 1088 1767 722.4 1254-73.8l-742.5-1156-5.7 2587.7c-1.9 1424 0 2601.1 5.7 2614.5 5.7 19.1 669.9 23 3267.2 19.1l3259.6-5.7 3.8-2526.4zM9417.4 866c5.7-3.8-2633.7-4530.5-2652.8-4547.7-11.5-11.5-2754.3 1502.5-2790.6 1538.9-7.7 7.7 740.7 13.4 1663.3 13.4 1148.4 0 1690.1 5.7 1716.9 19.1 99.5 53.6 95.7-28.7 95.7 2210.7v2076.7l981.9-652.7c537.7-359.8 981.8-656.5 985.6-658.4zm-5610-2589.6c-1705.4-1.9-3104.5 0-3110.3 3.8-7.7 9.6 1416.4 2239.4 1462.3 2289.2 23 23 99.5-44 578-522.5 499.6-497.6 557-549.3 614.4-549.3 34.5 0 86.1 13.4 116.8 30.6 38.3 23 243.1 367.5 784.7 1314.9l733.1 1282.4 960.8-1921.7L6910-1717.9l-3102.6-5.7z"
            className="color000 svgShape"
            transform="matrix(.1 0 0 -.1 0 511)"
          ></path>
          <path
            d="M2071.4 3543.7c-300.5-80.4-562.7-323.5-683.3-633.5-44-114.8-51.7-156.9-51.7-350.3 0-185.7 7.7-239.3 45.9-335 160.8-413.4 490-654.6 920.6-675.6 281.4-13.4 516.8 70.8 725.4 258.4 585.7 526.4 367.5 1494.8-390.5 1726.4-154.9 47.9-407.5 51.7-566.4 9.6zm543.6-436.4c114.8-55.5 216.3-157 283.3-283.3 36.4-68.9 44-111 44-264.1s-7.7-195.2-44-264.1c-67-126.3-168.4-227.8-287.1-285.2-147.4-72.7-363.7-74.6-514.9-7.7-118.7 53.6-260.3 197.1-315.8 323.5-55.5 124.4-55.5 342.6-1.9 467 47.8 103.4 179.9 254.6 262.2 296.7 185.7 97.6 398.1 103.4 574.2 17.2z"
            className="color000 svgShape"
            transform="matrix(.1 0 0 -.1 0 511)"
          ></path>
        </g>
    </svg>`;

var family = new FamilyTree(document.getElementById('tree'), {
      mouseScrool: FamilyTree.action.zoom,
      enableSearch: false,
    mode: 'dark',
    template: 'hugo',
    roots: [3],
    nodeBinding: {
        field_0: 'name',
        field_1: 'born',
        img_0: 'photo'
    },
        editForm: {
        titleBinding: "name",
        photoBinding: "photo",
        addMoreBtn: 'Add element',
        addMore: 'Add more elements',
        addMoreFieldName: 'Element name',
        generateElementsFromFields: true,
        elements: [
            { type: 'textbox', label: 'Full Name', binding: 'name' },
            { type: 'textbox', label: 'Email Address', binding: 'email' },
            [
                { type: 'textbox', label: 'Phone', binding: 'phone' },
                { type: 'date', label: 'Date Of Birth', binding: 'born' }
            ],
            [
                { type: 'select', options: [
				{ value: 'bg', text: 'Bulgaria' }, 
				{ value: 'ru', text: 'Russia' },
				{ value: 'gr', text: 'Greece' }],
			label: 'Country', binding: 'country' },
                { type: 'textbox', label: 'City', binding: 'city' },
            ],
            { type: 'textbox', label: 'Photo Url', binding: 'photo', btn: 'Upload' },
        ],
        buttons: {
            Gallery: {
                icon: GalleryIcon,
                text: 'Gallery'
            },
            edit: {
                icon: FamilyTree.icon.edit(24, 24, '#fff'),
                text: 'Edit',
                hideIfEditMode: true,
                hideIfDetailsMode: true
            },
            share: {
                icon: FamilyTree.icon.share(24, 24, '#fff'),
                text: 'Share'
            },
            pdf: {
                icon: FamilyTree.icon.pdf(24, 24, '#fff'),
                text: 'Save as PDF'
            },
            remove: null
        }
    }
});

family.on('field', function (sender, args) {
    if (args.name == 'born') {
        var date = new Date(args.value);
        args.value = date.toLocaleDateString();
    }
});

family.editUI.on('button-click', function (sender, args) {
    if (args.name == 'Gallery') {
        var data = family.get(args.nodeId);
        window.open(data.Gallery);
    }
});

family.load(
    [
        { id: 1, pids: [3], gender: 'female', photo: 'Images/Missing.jpg', name: 'Anastasia ???', born: '1929-09-29' },
        { id: 2, pids: [3], gender: 'female', photo: 'https://cdn.balkan.app/shared/m60/1.jpg', name: 'Terresa Alcaraz', born: '1930-09-23' },
        { id: 3, pids: [1, 2], gender: 'male', photo: 'https://cdn.balkan.app/shared/w60/1.jpg', name: 'Salvador Fuentes', born: '1929-09-29', },      
        { id: 4, mid: 2, fid: 3, pids: [5], gender: 'female', photo: 'Images/Eva.jpg', name: 'Eva Fuentes', born: '1975-11-12' },
        { id: 5, pids: [4], gender: 'male', photo: 'Images/Manuel.jpg', name: 'Manuel Uribe', born: '1986-10-01' },
        { id: 6, pids: [7], mid: 5, fid: 4, gender: 'female', photo: 'Image/Maggie.jpg', name: 'Maggie Uribe', born: '1986-04-01', Gallery: 'https://gmail.com', phone: '+1 970 319 2884', city: 'Puerto Vallarta', country: 'Mexico' },
        { id: 7, pids: [6], gender: 'male', photo: 'Images/Cesar.jpg', name: 'Cesar Franco', born: '1980-05-02' },
        { id: 8, mid: 6, fid: 7, gender: 'male', photo: 'Images/Nickolas.jpg', name: 'Nickolas Franco', born: '2008-07-06' },
        { id: 9, mid: 6, fid: 7, gender: 'male', photo: 'Images/Daniel.jpg', name: 'Daniel Franco', born: '2009-10-14' },
        { id: 10, mid: 6, fid: 7, gender: 'male', photo: 'Images/Sammuel.jpg', name: 'Sammuel Franco', born: '2012-01-07' },
        { id: 11, pids: [], mid: 5, fid: 4, gender: 'male', photo: 'Image/Maggie.jpg', name: 'Manuel Uribe', born: '1986-04-01', city: 'Puerto Vallarta', country: 'Mexico' },
        { id: 12, pids: [], mid: 5, fid: 4, gender: 'male', photo: 'Image/Maggie.jpg', name: 'David Emanuel Uribe', born: '1986-04-01', city: 'Puerto Vallarta', country: 'Mexico' },
    ]
);
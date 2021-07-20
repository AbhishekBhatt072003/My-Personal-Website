var r = document.querySelector(':root');
var rs = getComputedStyle(r);

var value = rs.getPropertyValue('--globe-color')
$(document).ready(function () {

    var entries = [

        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JavaScript' },
        { label: 'jQuery' },
        { label: 'React.js' },
        { label: 'Node.js' },
        { label: 'Express.js' },
        { label: 'MongoDB' },
        { label: 'Bootstrap' },
        { label: 'API' },
        { label: 'ES5/ES6' },
        { label: 'Photoshop' },
        { label: 'Illustrator' },
        { label: 'Frontend' },
        { label: 'Java' },
        { label: 'C' },
        { label: 'JSON' },
        { label: 'Wordpress' },
        { label: 'Git' },
        { label: 'GitBash' },
    ];

    var settings = {

        entries: entries,
        width: 580,
        height: 500,
        radius: '88%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'transparent',
        opacityOver: 1.00,
        opacityOut: 0.1,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.8,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '20',
        fontColor: value,
        fontWeight: 'bold',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: false,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#holder').svg3DTagCloud(settings);

});

import san from 'san';

var newApp = san.defineComponent({
    template: `<p>Hello {{name}} from P-JIANGH</p>`,

    initData: function () {
        return {
            name: 'san',
        };
    }
});

export default newApp;

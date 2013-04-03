Ext.define('aoa.model.LocalDoctors', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['firstName','lastName','title','id'],
		identifier: 'uuid'
    }
});

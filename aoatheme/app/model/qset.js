Ext.define('aoatheme.model.qset', {
    extend: 'Ext.data.Model',
    config: {
	
        fields: [
		
		/* Clinical Success */
		
			// Biometry
            {name: 'bq1'},
            {name: 'bq1-notes'},
            {name: 'bq2'},
            {name: 'bq3'},
            {name: 'bq3-notes'},
            {name: 'bq4'},
			
			// Implantation
			{name: 'iq1'},
			{name: 'iq2'},
			{name: 'iq3'},
			
			// Post-Op Evaluation
			{name: 'poq1'},
			{name: 'poq1-notes'},
			{name: 'poq2'},
			{name: 'poq3'},
			
			
		/* Lifestyle Assessment */
		
			// Patient Questionnaire
            {name: 'pqq1'},
            {name: 'pqq2'},
            {name: 'pqq3'},
            {name: 'pqq4'},	
			
			// Patient Selection
			{name: 'psq1'},
			{name: 'psq1-notes'},
			{name: 'psq2'},
			{name: 'psq3'},
			
			
		/* Staff Training */
		
			{name: 'stq1'},
			{name: 'stq1-notes'},
			{name: 'stq2'},
			{name: 'stq3'},
			{name: 'stq4'},
			{name: 'stq5'},
			{name: 'stq6'},
			{name: 'stq7'},
			
		/* Patient Experience */
		
			// Patient Education
			{name: 'peq1'},
			{name: 'peq1-notes'},
			{name: 'peq2'},
			{name: 'peq3'},
			{name: 'peq4'},

			// Patient Journey
			{name: 'pjq1'},
			{name: 'pjq2'},
			{name: 'pjq3'},
			{name: 'pjq4'},
			{name: 'pjq4-notes'},
			{name: 'pjq5'},
			{name: 'pjq6'},
			
		/* LENS Recommendation */
			{name: 'lrq1'},
			{name: 'lrq2'},
			{name: 'lrq3'},
			{name: 'lrq3-notes'},
			{name: 'lrq4'},
			{name: 'lrq5'},
			{name: 'lrq6'},
			{name: 'lrq7'}		
        ],
		proxy: {
			type: 'localstorage',
			id: 'qset'	
		},
		identifier: 'uuid'
    }
});
Ext.define('aoatheme.view.qsections.patientexperience', {
    extend: 'Ext.Container',
    xtype: 'patientexperience',

    config: {
        title: 'patientexperience',
		items: [
			{
				cls: 'assm-divider',
				html: '<div class="assm-h1">Patient Experience</div>'
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},						
			/* Patient Questionnaire */
			{
				cls: 'assm-divider',
				items: {
					xtype: 'toolbar',
					docked: 'bottom',
					cls: 'aoa-list-search-toolbar',
					items: [
						{
							cls: 'assm-h2',
							xtype: 'title',
							title: 'Patient Education (4 Questions)'
						},
						{xtype: 'spacer'},
						{
							text: 'Add a note',
							ui: 'normal',
							align: 'right',
							cls: 'assm-btn-type-a',
							handler: function() {
								/* what's this ? */
							}
						}
					]								
				}
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},
			/* question 1 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 1'
							},
							{
								cls: 'assm-qtext',
								html: 'What materials are used to educate patients about the benefits and risks of multifocals? (Select all that apply)'
							}							
						]
					},
					{xtype: 'peq1'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 2 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 2'
							},
							{
								cls: 'assm-qtext',
								html: 'How consistently are the patient education methods and materials described above used?'
							}							
						]										
					},
					{xtype: 'peq2'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 3 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 3'
							},
							{
								cls: 'assm-qtext',
								html: 'How much time is spent verbally explaining multifocal benefits after initial patient education has already taken place?'
							}							
						]
					},
					{xtype: 'peq3'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 4 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 4'
							},
							{
								cls: 'assm-qtext',
								html: 'Rate the staff\'s overall attitude toward multifocal options'
							}							
						]
					},
					{xtype: 'peq4'}
				]
			},
			/* Patient Journey */
			{
				html: '<hr class="hr-divider wide"/>'
			},
			{
				cls: 'assm-divider',
				items: {
					xtype: 'toolbar',
					docked: 'bottom',
					cls: 'aoa-list-search-toolbar',
					items: [
						{
							cls: 'assm-h2',
							xtype: 'title',
							title: 'Patient Journey (6 Questions)'
						},
						{xtype: 'spacer'},
						{
							text: 'Add a note',
							ui: 'normal',
							align: 'right',
							cls: 'assm-btn-type-a',
							handler: function() {
								/* what's this ? */
							}
						}
					]								
				}
			},
			{
				html: '<hr class="hr-divider wide"/>'
			},
			/* question 1 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 1'
							},
							{
								cls: 'assm-qtext',
								html: 'How often do patients interact with new/unfamiliar staff members?'
							}							
						]
					},
					{xtype: 'pjq1'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 2 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 2'
							},
							{
								cls: 'assm-qtext',
								html: 'How often does pre-surgical multifocal patient counseling take place with the staff?'
							}							
						]										
					},
					{xtype: 'pjq2'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 3 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 3'
							},
							{
								cls: 'assm-qtext',
								html: 'How often does post-surgical multifocal patient counseling take place with the staff?'
							}							
						]
					},
					{xtype: 'pjq3'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 4 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 4'
							},
							{
								cls: 'assm-qtext',
								html: 'When it comes to setting patient expectations, how balanced is the conversation between multifocal risks and benefits?'
							}							
						]
					},
					{xtype: 'pjq4'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 5 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 5'
							},
							{
								cls: 'assm-qtext',
								html: 'How would you rate the number of lens option educational touchpoints for each patient?'
							}							
						]
					},
					{xtype: 'pjq5'}
				]
			},
			{
				html: '<hr class="hr-divider"/>'
			},
			/* question 6 */
			{
				cls: 'assm-divider',
				layout: 'hbox',
				items: [
					{
						cls: 'assm-left-panel',
						flex: 1.7,
						layout: 'vbox',
						items:[
							{
								cls: 'assm-qheader',
								html: 'Question 6'
							},
							{
								cls: 'assm-qtext',
								html: 'Overall, how would you rate the patient journey at this account with regard to multifocal pull-through?'
							}							
						]
					},
					{xtype: 'pjq6'}
				]
			}
		]
    }
});
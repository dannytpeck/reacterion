import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCie, removeCie, editCie, updateCie, addCategory, removeCategory } from '../actions/index';
import { fetchTemplates } from '../actions/index';
import bourbonScripts from '../helpers/bourbon_scripts';

class CieAccordion extends Component {
  componentWillMount() {
    this.props.fetchTemplates();
  }
  
	componentDidMount() {
		bourbonScripts();		
	}
  
  handleEditClick(template) {
    this.props.editCie(template.incentive_id);
  }
  
  checkIfSelected(id) {
    let found = false;
    this.props.selected.map((cie) => {
      if (cie.incentive_id === id) {
        found = true;
      }
    });
    return found;
  }
	
	handlePointChange(event, template) {
		this.props.updateCie({
			...template,
			points: event.target.value
		});
	}
	
	handleCategoryToggle(category) {
		const categoryNames = this.props.categories.map(category => category.name);
		if (categoryNames.includes(category.name)) {
			this.data.templates.map((template) => {
				if (template.category === category.name && template.is_default) {
					this.props.removeCie(template.incentive_id);
				}
			});		
			this.props.removeCategory(category);
		} else {
			this.data.templates.map((template) => {
				if (template.category === category.name && template.is_default) {
					if (!this.checkIfSelected(template.incentive_id)) {
						this.props.addCie(template);
					}
				}
			});
			this.props.addCategory(category);
		}		
	}
  
  renderCategories() {
		this.allCategories = [
			{
				name: 'defaults',
				title: 'Limeade Defaults'
			},
			{
				name: 'screening',
				title: 'Health Screening'
			},
			{
				name: 'assessment',
				title: 'Assessment'
			},
			{
				name: 'outcomes',
				title: 'Outcomes'
			},
			{
				name: 'coaching',
				title: 'Coaching'
			},
			{
				name: 'ras',
				title: 'RAS (Reasonable Alternative Standard)'
			},
			{
				name: 'revive',
				title: 'Revive'
			}
    ];
			
		const categoryNames = this.props.categories.map(category => category.name);
		
    return this.allCategories.map((category) => {
      return (
        <li key={category.name}>
          <label className="label-switch">
            <input 
							type="checkbox" 
							id={`${category.name}-group`} 
							checked={categoryNames.includes(category.name) ? 'checked' : ''}
							onChange={() => {
								this.handleCategoryToggle(category);
							}} />
            <div className="checkbox"></div>
          </label>
          <a href="javascript:void(0)" className="js-accordion-trigger">{category.title}</a>
          <ul className="submenu">
            {this.renderEvents(category.name)}
          </ul>
        </li>
      );
    });
  }
	
  renderEvents(category) {
    this.data = {
        templates: [
          {
            id: 0,
            title: 'Sign in for the First Time',
            incentive_id: 1,
            default_image_id: 0,
            default_image_title: 'Image Title',
            short_description: '',
            more_information: '<p><strong>The first step can be the biggest!</strong></p><p>Points are awarded the first time you sign in to set up your account.</p>',
            created_date: '8/14/2016',
            created_by_user_id: 0,
            created_by_user_name: 'Danny Peck',
            category: 'defaults',
            is_default: true
          },
          {
            id: 1,
            title: 'Track Your Progress',
            incentive_id: 3,
            more_information: '<p><strong>Receive points every day you track your personal or challenge goals!</strong></p><p>Points are awarded once per day for tracking at least one goal.</p>',
            category: 'defaults',
            is_default: true
          },
          {
            id: 2,
            title: 'Participate in a Challenge',
            incentive_id: 5,
            more_information: '<p><strong>Create or join a challenge and receive points!</strong></p><p>Get started by finding a challenge that\'s right for you!</p>',
            category: 'defaults',
            is_default: false
          },
          {
            id: 3,
            title: 'Join Your First Challenge',
            incentive_id: 24,
            more_information: '<p><strong>Create or join a challenge and receive points!</strong></p><p>Get started by finding a challenge that\'s right for you!</p>',
            category: 'defaults',
            is_default: true
          },
          {
            id: 4,
            title: 'Bonus Points',
            incentive_id: 1610,
            more_information: '<p></p>',
            category: 'defaults',
            is_default: true
          },
          {
            id: 5,
            title: 'Complete a Health Screening',
            incentive_id: 7,
            more_information: '<p>A true health screening can provide an accurate measure of your health. Points are awarded as soon as we receive data from the screeners.</p><p><strong>Join us at an onsite screening!</strong></p><h3><strong><a href="#" target="_new">Click here to schedule your screening</a></strong></h3><p>If you are unable to attend an onsite event, there are still options to complete your screening:</p><p><strong>1. <a href="#" target="_new">Click to download a physician fax form</a></strong> (PDF) to take to your primary care physician*</p><p><strong>*Completing your Health Provider Screening form</strong></p><div style="padding-left:15px"><ol> <li>Have your health provider complete and sign the form.</li> <li>Submit the signed form via one of two secure methods (either you or your health provider&#39;s office can complete this step): <ul> <li>Upload at <a href="https://wellmetricssurveys.secure.force.com/program" target="_new">forms.wellmetrics.life/submission</a></li> <li>Fax to 1-866-877-7095.</li> <li>Note: Please do not include the cover page of the form in your submission. Only page 2 is required.</li> </ul> </li> <li>Keep a copy of the successful transmission for your records.</li></ol></div><p><strong>2. <a href="#" target="_new">Click to download a LabCorp form</a></strong> (PDF) to take to your local LabCorp facility**</p><p><strong>3. <a href="#" target="_new">Click to order a Home Test Kit</a></strong> for self-testing</p><div style="padding-left:10px;"><em><p>**About LabCorp<br>How to locate a LabCorp Patient Service Center (PSC) for specimen collection:<br>Go to the LabCorp website at www.labcorp.com. Click on Find a Lab. Enter zip code.<br>Or call toll-free 1-888-LABCORP (522-2677).<br>Please note to only go to a PSC that has the name LabCorp</p><p>You must take the following with you to the LabCorp PSC:</p><ul><li>Clinical Requisition Form (with your first and last name, and date of birth written on the form)</li><li>Photo ID</li></ul><p>It is very important that you bring these two items with you when you arrive at the LabCorp PSC.</p></em> </div>',
            category: 'screening',
            is_default: true
          },
          {
            id: 6,
            title: 'Know Your Numbers',
            incentive_id: 22,
            more_information: '<p><strong>If you\'ve had a blood test from your care provider, enter your health numbers to receive points!</strong></p><p>To earn points, you must enter values for <strong>height</strong>,<strong> weight</strong>, <strong>total cholesterol</strong>, <strong>LDL</strong>, <strong>HDL</strong>, and <strong>blood pressure</strong>.</p>',
            category: 'screening',
            is_default: false
          }
        ]
      };
		if (this.props.templates) {
			return this.props.templates.map((template) => {
				if (template.category === category) {
					return (
						<li key={template.incentive_id}>
							<a href="javascript:void(0)">
								<label className="label-switch">
									<input 
										type="checkbox" 
										className={template.is_default ? `${template.category}-child` : ''}
										checked={this.checkIfSelected(template.incentive_id) ? 'checked' : ''}
										onChange={() => {
											this.checkIfSelected(template.incentive_id) ? 
											this.props.removeCie(template.incentive_id) :
											this.props.addCie(template);
										}}
										value={template.incentive_id} />
									<div className="checkbox"></div>
								</label>
								<span>{template.incentive_id} {template.title} </span>
								<input 
									type="text" 
									className="textbox-points" 
									name="points"
									onChange={(e) => this.handlePointChange(e, template)} />
								<label> points</label>
								{this.checkIfSelected(template.incentive_id) ? 
								<button 
									className="editCIE" 
									data-eventid={template.incentive_id} 
									data-editing="false"
									onClick={() => this.handleEditClick(template)}>Edit</button> : ''}
							</a>
						</li>
					);
				}
			});
		} else {
			return this.data.templates.map((template) => {
				if (template.category === category) {
					return (
						<li key={template.id}>
							<a href="javascript:void(0)">
								<label className="label-switch">
									<input 
										type="checkbox" 
										className={template.is_default ? `${template.category}-child` : ''}
										checked={this.checkIfSelected(template.incentive_id) ? 'checked' : ''}
										onChange={() => {
											this.checkIfSelected(template.incentive_id) ? 
											this.props.removeCie(template.incentive_id) :
											this.props.addCie(template);
										}}
										value={template.incentive_id} />
									<div className="checkbox"></div>
								</label>
								<span>{template.incentive_id} {template.title} </span>
								<input 
									type="text" 
									className="textbox-points" 
									name="points"
									onChange={(e) => this.handlePointChange(e, template)} />
								<label> points</label>
								{this.checkIfSelected(template.incentive_id) ? 
								<button 
									className="editCIE" 
									data-eventid={template.incentive_id} 
									data-editing="false"
									onClick={() => this.handleEditClick(template)}>Edit</button> : ''}
							</a>
						</li>
					);
				}
			});
		}
  }
  
  render() {
    return (
      <ul className="accordion">
        {this.renderCategories()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { 
    selected: state.cies.selected,
    editing: state.cies.editing,
		categories: state.categories.selected,
    templates: state.templates.all
  };
}

export default connect(mapStateToProps, { 
  addCie, 
  removeCie, 
  editCie, 
  updateCie, 
  addCategory, 
  removeCategory, 
  fetchTemplates 
})(CieAccordion);


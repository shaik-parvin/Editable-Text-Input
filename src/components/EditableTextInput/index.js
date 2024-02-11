import {Component} from 'react'
import {
  AppContainer,
  AppCard,
  Heading,
  EditContainer,
  Description,
  UserInput,
  Button,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {edited: false, text: ''}

  editText = event => {
    this.setState({text: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({edited: !prevState.edited}))
  }

  render() {
    const {edited, text} = this.state
    const buttonText = edited ? 'Edit' : 'Save'

    return (
      <AppContainer>
        <AppCard>
          <Heading>Editable Text Input</Heading>
          <EditContainer>
            {edited ? (
              <Description>{text}</Description>
            ) : (
              <UserInput type="text" value={text} onChange={this.editText} />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </EditContainer>
        </AppCard>
      </AppContainer>
    )
  }
}

export default EditableTextInput

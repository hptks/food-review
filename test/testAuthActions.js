import assert from 'assert'
import * as actions from '../src/js/actions/userActions'

describe('Testing actions', () => {
  it('sign in request action', () => {
    const expected = {
      type: 'SIGN_IN_REQUEST'
    }

    assert.equal(JSON.stringify(expected), JSON.stringify(actions.signinRequest()))
  })

  it('sign in success action', () => {
    const expected = {
      type: 'SIGN_IN_SUCCESS',
      payload: {
        username: 'hpt',
        password: 'apassword'
      }
    }

    assert.equal(expected.type, actions.signinSuccess().type)
    assert.equal(JSON.stringify(expected.payload),
                 JSON.stringify(actions.signinSuccess('hpt', 'apassword').payload))
  })

  it('sign in failed action', () => {
    const expected = {
      type: 'SIGN_IN_FAIL'
    }

    assert.equal(JSON.stringify(expected), JSON.stringify(actions.signinFail()))
  })
})

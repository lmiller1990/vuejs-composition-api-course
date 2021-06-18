interface Rule {
  type: 'required' | 'length'
}

interface Require extends Rule {
  type: 'required'
}

interface LengthOptions {
  min: number
  max: number
}

interface Length extends Rule {
  type: 'length'
  options: LengthOptions
}

export function required(): Require {
  return {
    type: 'required'
  }
}

export function length(options: LengthOptions): Length {
  return {
    type: 'length',
    options
  }
}

export interface Status {
  valid: boolean
  message?: string
}

type Validator = Require | Length

export function validate(value: string | undefined, validators: Validator[]): Status {
  for (const validator of validators) {
    if (validator.type === 'required') {
      if (!value || value.length === 0) {
        return {
          valid: false,
          message: 'This value is required.'
        }
      }
    }

    if (validator.type === 'length') {
      if (
        value!.length < validator.options.min || value!.length > validator.options.max 
      ) {
        return {
          valid: false,
          message: `The value must be between ${validator.options.min} and ${validator.options.max}`
        }
      }
    }
  }

  return {
    valid: true
  }
}

// const result =  validate('username', [required()]) {
//   return {
//     valid 
//     message:
//   }
// }
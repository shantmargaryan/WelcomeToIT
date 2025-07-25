import {
  Number
} from "./styled"

export default function PhoneNumber({ number }) {

  return (
    <Number href={`tel:${number}`}>
      {number}
    </Number>
  )
}
import Text from "./components/text"
import Icon from "./components/icon"
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import Pencil from './assets/icons/PencilSimple-Regular.svg?react'
import Badge from "./components/badge"
import Button from "./components/button"

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text
        variant="body-md"
        className="text-pink-base"
      >Olá</Text>
      <Text
        variant="body-md-bold"
        className="text-green-base"
      >Oie</Text>
      <Text
        variant="body-sm-bold"
      >Oi</Text>

      <Icon className="fill-pink-base" svg={TrashIcon}/>
      <Icon svg={Pencil} animate></Icon>

      <div>
        <Badge variant="primary">2 de 10</Badge>
        <Badge variant="secondary">5</Badge>
      </div>

      <div>
        <Button icon={Pencil}>Nova Tarefa</Button>
      </div>
    </div>
  )
}

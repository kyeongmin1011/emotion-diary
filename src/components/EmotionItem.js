const EmotionItem = ({id, img, description, onClick, isSelected}) => {
  return (
    <div className={["EmotionItem", isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off_${id}`].join(' ')}
         onClick={() => onClick(id)} >
      <img src={img}/>
      <span>{description}</span>
    </div>
  )
}
export default EmotionItem;
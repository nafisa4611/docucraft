import ContentDisplay from "../../../Components/ContentDisplay"

const ContentPage = ({params: {contentId}}) => {
  return (
    <ContentDisplay id={contentId} />
  )
}

export default ContentPage
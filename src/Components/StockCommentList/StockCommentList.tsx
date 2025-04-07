import { CommentGet } from "../../Models/Comment";
import StockCommentListItem from "../StockComment/StockCommentListItem/StockCommentListItem";




type Props = {
    comments: CommentGet[];
  };
  
  const StockCommentList = ({ comments }: Props) => {
    return (
      <>
        {comments
          ? comments.map((comment) => {
              return <StockCommentListItem comment={comment} />;
            })
          : ""}
      </>
    );
  };
  
  export default StockCommentList;
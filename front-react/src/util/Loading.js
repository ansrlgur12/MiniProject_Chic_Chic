
// 로딩중 표시 위한 Spinner
function Loading() {
  return (
    <>
<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    </>
  );
}

export default Loading;
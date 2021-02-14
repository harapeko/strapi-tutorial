export default ({ $strapi, redirect }) => {
  if ($strapi.user) {
    redirect('/articles/')
  }
}

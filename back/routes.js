var MailModel = require('./MailModel');


module.exports = function (app)
{
/* API RESTFULL POUR GESTION DES MAILS */

  /*Renvoie le dossier formatté*/
  app.get('/folder', function (req, res) {
    MailModel.getFolders(function (folders){
      return res.send(folders);
    });
  });

  /* Renvoie tous les mails */
  app.get('/mail', function (req, res) {
    MailModel.getMails(function (mails){
      return res.send(mails);
    });
  });

  /* permet de cibler un mail spécifique */

  /* permet d'ajouter un mail en bdd */
  app.post('/mail', function (req, res) {
    MailModel.addMail(req.body, function (newMail){
      return res.send(newMail);
    });
  });

  /*permet de modifier un mail*/


  /* permet de supprimer un mail */
  app.delete('/mail/:id', function (req, res) {
    var _id = req.params.id;
    global.MongoMailModel.remove({_id: _id}, function(err,removed) {
        if (err) throw err;
        else
          return res.send(_id);
    });

  });

}

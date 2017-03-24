UserDiscussion = new Mongo.Collection('userdiscussion');


UserDiscussion.allow({                                                          //Checks if the user is still logged in
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

UserDiscussionSchema = new SimpleSchema({                                       //schema for the userdiscussion

   comment: {
      type: String,
      min: 5,
      max: 1000,
      autoform: {
         rows: 5
      }
   },
   createdBy:{
       type: String,
       label: "Created By",
       autoValue: function () {
           if (this.isInsert && (!this.isSet || this.value.length === 0)) {     //Sets value when its insert, not update
               return this.userId
           }
       },
       autoform: {
           type: "hidden"
       }
   },
   createdAt: {
       type: Date,
       label: "Created At",
       autoValue: function() {
           if (this.isInsert && (!this.isSet || this.value.length === 0)) {
               return new Date()
           }
       },
       autoform: {
           type: "hidden"
       }
   },
});

Meteor.methods({
  deleteComment: function(id) {
      UserDiscussion.remove(id);
  },

  editComment: function(id, currentState){
      UserDiscussion.update(id,{
        $set:{
          inCommentSection: !currentState
        }
      });
  }
})

UserDiscussion.attachSchema(UserDiscussionSchema);

const { dbConnection } = require("../Configurations");

class Reviewer {
  constructor(reviewerData) {
    this.reviewerData = reviewerData;
  }

  save(cb) {
    dbConnection("reviewers", async (db) => {
      try {
        await db.updateOne(
          { name: this.reviewerData.name, _user_id: null },
          {
            $set: {
              _user_id: this.reviewerData._user_id,
              name: this.reviewerData.name,
            },
          },
          { upsert: true }
        );
        cb({
          status: true,
        });
      } catch (err) {
        cb({
          status: false,
          message: err.message,
        });
      }
    });
  }
}

module.exports = Reviewer;

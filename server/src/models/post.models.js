const mongoose = require('mongoose');
const slugify = require('slugify');

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'post must have author'],
    },
    title: {
      type: String,
      required: [true, 'post must have title'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'post must have content'],
    },
    category: {
      type: String,
      enum: ['javaScript', 'Nodejs', 'React', 'mongodb'],
    },
    slug: String,
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedAt: Date,
  },
  {
    timestamps: true,
  },
);

postSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true, trim: true });
  next();
});

module.exports = mongoose.model('Post', postSchema);

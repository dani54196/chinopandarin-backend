
import Chapter from "../models/Chapter";

export const createChapter = async (req, res) => {
  const { name, content, audioURL, imgURL } = req.body;

  try {
    const newChapter= new Product({
      title,
      content,
      audioURL,
      imgURL,
    });

    const ChapterSaved = await newProduct.save();

    res.status(201).json(productSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getChapterById = async (req, res) => {
  const { chapterId } = req.params;

  const chapter = await Product.findById(productId);
  res.status(200).json(product);
};

export const getChapters = async (req, res) => {
  const chapter = await Product.find();
  return res.json(chapter);
};

export const updateChapterById = async (req, res) => {
  const updatedChapter = await Chapter.findByIdAndUpdate(
    req.params.chapterId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedChapter);
};

export const deleteChapterById = async (req, res) => {
  const { ChapterId } = req.params;

  await Chapter.findByIdAndDelete(chapterId);

  // code 200 is ok too
  res.status(204).json();
};

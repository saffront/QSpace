Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "1073375022675751", "46667e88d960b0ca593c1943f824ba1c",
           scope: 'public_profile', display: 'page', image_size: 'square'

  provider :twitter, 'mZiPcyw7joKjmpbfEL2aq7Eoi', 'T8J5j56fdqZc7q2Kfmn7wBj6fMcYBaiavitCvRbdEu31FYXc87', image_size: 'normal'
end
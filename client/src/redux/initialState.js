const initialState = {
  products: [],
  cart: {
    products: [
      {
        id: "fd105551-0f0d-4a9f-bc41-c559c8a17250",
        name: "White T-shirt",
        price: 15,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit ultricies eros, quis congue elit pretium at. Phasellus rutrum finibus",
        images: "white-tshirt-1.jpg, white-tshirt-2.jpg",
        count: 2,
      },
      {
        id: "fd105551-0f0d-4a9f-bc41-c559c8a17251",
        name: "Black pants",
        price: 30,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus non diam ultrices malesuada. Nam sodales, lacus eu blandit dapibus, purus diam efficitur sapien, vitae pharetra lectus lorem sed massa. Etiam ornare egestas ligula, id pulvinar lorem egestas eget. Nam mattis euismod lorem, vel efficitur odio dapibus ut. Sed diam lectus, ultricies et tincidunt sit amet, iaculis et ligula. Cras id metus tellus. Nulla eget ultrices leo, sit amet aliquet turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sollicitudin ligula quis tellus scelerisque, sit amet mollis turpis pretium. Quisque maximus erat et massa ultricies consequat. Duis pharetra lorem eu ullamcorper semper. Mauris interdum turpis sed iaculis auctor. Nullam sollicitudin varius sapien, ut venenatis arcu.",
        images: "black-pants-1.jpg, black-pants-2.jpg",
        count: 40,
      },
    ],
  },
  order: {
    products: [
      {
        id: "fd105551-0f0d-4a9f-bc41-c559c8a17250",
        name: "White T-shirt",
        price: 15,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit ultricies eros, quis congue elit pretium at. Phasellus rutrum finibus",
        images: "white-tshirt-1.jpg, white-tshirt-2.jpg",
        count: 2,
        note: "Poproszę koszulkę w rozmiarze L"
      },
      {
        id: "fd105551-0f0d-4a9f-bc41-c559c8a17251",
        name: "Black pants",
        price: 30,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt metus non diam ultrices malesuada. Nam sodales, lacus eu blandit dapibus, purus diam efficitur sapien, vitae pharetra lectus lorem sed massa. Etiam ornare egestas ligula, id pulvinar lorem egestas eget. Nam mattis euismod lorem, vel efficitur odio dapibus ut. Sed diam lectus, ultricies et tincidunt sit amet, iaculis et ligula. Cras id metus tellus. Nulla eget ultrices leo, sit amet aliquet turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sollicitudin ligula quis tellus scelerisque, sit amet mollis turpis pretium. Quisque maximus erat et massa ultricies consequat. Duis pharetra lorem eu ullamcorper semper. Mauris interdum turpis sed iaculis auctor. Nullam sollicitudin varius sapien, ut venenatis arcu.",
        images: "black-pants-1.jpg, black-pants-2.jpg",
        count: 40,
        note: ""
      },
    ],
  }
};
export default initialState;
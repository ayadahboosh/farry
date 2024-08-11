import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import SkinTypePage from './pages/SkinTypePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const products = [
        { id: 1, name: 'SHEGLAM Face Essentials Brush Set With Bag', image: 'https://wonderbeauties.love/cdn/shop/products/LISK1789.jpg?v=1678110524&width=1800', price: '$15', description: 'مجموعة من ثلاث فُرَش مكياج وجه أساسية ذات وجهين تستخدم للتحديد، وضع البلاشر، والهايلايت، والكونسيلر، وأكثر من ذلك. مصنوعة من شعيرات ناعمة، مقابض خشبية فاخرة، ومحفوظة في حقيبة أنيقة مناسبة للسفر، ستبدين كمحترفة مكياج أينما ذهبتِ.', category: 'makeup' },
        { id: 2, name: 'مجموعة الاكتشاف لسيرومات بيوتي اوف جوسون', image: 'https://cdn.salla.sa/PgNer/zJmSkGbqJRnj3t35pIT6uDQ7EJ2cWVSUFqB5dRWD.jpg', price: '$25', description: 'مجموعة الاكتشاف لسيرومات بيوتي اوف جوسون تحتوي على الاربعة سيرومات الافضل مبيعا ، بحجم ميني 10 مل لتكتشفي ايها الانسب لبشرتك او تستخدميها جميعا حسب نوع بشرتك ومشكلتها.', category: 'skincare' },
        { id: 3, name: 'e.l.f. Waterproof Eyeliner Pen-1.4g', image: 'https://wonderbeauties.love/cdn/shop/files/609332216518.jpg?v=1720529259&width=1800', price: '$30', description: 'قلم تحديد العيون هذا يعزز خط الرموش بلون غني. و ضد الماء.', category: 'makeup' },
        { id: 4, name: 'Catrice Lip Oil l Glossin Glow Tinted-4ml', image: 'https://wonderbeauties.love/cdn/shop/products/10.webp?v=1694952154&width=1800', price: '$20', description: 'هو منتج فريد يجمع بين فوائد زيت الشفاه ولمعان الغلوس في تركيبة واحدة.', category: 'makeup' },
        { id: 5, name: 'سيستيفان شامبو مضاد لتساقط الشعر-200-مل cystiphane', image: 'https://cdn.salla.sa/qaXdd/r4zY2gOhoJvUHqBGoCfD0slPn96BBoKIal9Moi8Z.jpg', price: '$15', description: 'تركيبة مبتكرة لتعزيز فعالية بيريثيون الزنك تمنع تساقط الشعر وتزيد من كثافة الشعر.', category: 'hair' },
        { id: 6, name: 'Bio Balance Organic Lavender Shampoo-330ml', image: 'https://wonderbeauties.love/cdn/shop/files/F80FED15-FA2F-4F14-8AD0-D0FA4CD53C66.jpg?v=1707650583&width=1800', price: '$10', description: 'شامبو بيو بالانس العضوي مع الخزامى شامبو اللافندر العضوي الخالي من الكبريتات من بيو بالانس.', category: 'hair' },
        { id: 7, name: 'Garnier Ultra Doux Repairing Papaya 3-in-1 Hair food For Damaged Hair-390ml', image: 'https://wonderbeauties.love/cdn/shop/products/ffUg9DnoeMn1yGmLtRsxNkbJ9APitCAeQ6dcrdaN.png?v=1654528450&width=1800', price: '$20', description: 'مغذي للشعر 3 في 1 بالبابايا للشعر التالف، بملمس كالزبدة بجعل شعرك أكثر حيويا ولمعاناً وصحياً.', category: 'hair' },
        { id: 8, name: 'Sesderma Hidraloe Aloe Gel-250ml', image: 'https://wonderbeauties.love/cdn/shop/files/8470001612731.jpg?v=1720874975&width=1800', price: '$18', description: 'بمستخلص الألوفيرا العضوي 100% الذي يرطب، يهدئ ويحمي بشرتك.', category: 'body' },
        { id: 9, name: 'The Purest Solutions Arbutin 2% + Hyaluronic Acid Brightening Serum-30ml', image: 'https://wonderbeauties.love/cdn/shop/products/the-purest-solutions-arbutin-2-hyaluronic-acid-brightening-serum-30-ml-the-purest-solutions-160320-71-O_bfbe61d7-7506-4c50-8880-3b74ea1ea361.jpg?v=1672650453&width=1800', price: '$22', description: 'سيروم يعمل على توحيد لون البشرة و تفتيح البشرة.', category: 'face' },
        { id: 10, name: 'heimish Marine Care Retinol For Face Serum-50ml', image: 'https://wonderbeauties.love/cdn/shop/files/443.webp?v=1707643426&width=1800', price: '$15', description: 'مكافحة التجاعيد وزيادة المرونة ريتينول 0.1٪ + أدينوسين للعناية بالتجاعيد.', category: 'face' },
        { id: 11, name: 'Ardene Beauty Pureline Make-up Remover-120ml', image: 'https://wonderbeauties.love/cdn/shop/files/6260147706096.jpg?v=1709473153&width=1800', price: '$20', description: 'مزيل مكياج العيون والشفاه ثنائي الطور يعتمد على الزيت لإزالة مكياج العيون والشفاه.', category: 'makeup' },
        { id: 12, name: 'Pupa Vamp Mascara Deep Night-9ml', image: 'https://wonderbeauties.love/cdn/shop/files/8011607179152.jpg?v=1719821421&width=1800', price: '$12', description: 'تمنحك رموشًا كثيفة، ممتلئة وشديدة الكثافة بمظهر درامي يشبه الرموش الصناعية.', category: 'makeup' },

        // المنتج الجديد
        { id: 13, name: 'b.Fresh When In Doubt Buff It Out Body Scrub-200G', image: 'https://wonderbeauties.love/cdn/shop/files/9347108040851.png?v=1722761315&width=1800', price: '$35', description: 'اجعلي بشرتك ناعمة وجاهزة مع هذا المقشر اللطيف للجسم. تعمل إنزيمات الفاكهة على إذابة خلايا الجلد الميتة المزعجة لتكشف عن بشرة متوهجة ومنتعشة وتوحد ملمسها، بينما تساعد الببتيدات في تعزيز الترطيب واستعادة الحيوية في جميع أنحاء الجسم. مضاف إليه رائحة فواحة وحيوية تتركك برائحة رائعة وإحساس بالانتعاش والتألق', category: 'body' },
        { id: 14, name: 'DERMEDIC Hydrain3 Ultra-hydrating body butter body oil-225ml', image: 'https://wonderbeauties.love/cdn/shop/files/5901643176105.webp?v=1722512988&width=1800', price: '$40', description: 'عناية مكثفة لترطيب الحاجز للبشرة الجافة جدًا، الخشنة والمتقشرة    يوفر راحة فورية ويقلل من الشعور بالشد. يعمل المنتج بثلاثة اتجاهات من خلال المكونات النشطة المرطبة والمغذية، والتي تشمل ترطيب البشرة بعمق وطويل الأمد (بفضل مركب Aqualare® المبتكر الحاصل على براءة اختراع، والذي يحتوي على 4 أشكال من حمض الهيالورونيك)، تغذية وتجديد البشرة، بالإضافة إلى استعادة الوظائف السليمة للحاجز الواقي. يمنع المنتج تشقق وتقرن البشرة', category: 'body' },
        { id: 15, name: 'Madam Coachella Moroccan Soap-1kg', image: 'https://wonderbeauties.love/cdn/shop/files/3D43EEC0-40BE-4AC1-8BDC-24DD38C564FF.jpg?v=1722236624&width=1800', price: '$45', description: 'الصابون المغربي بزيت الأرجان يُستخدم كمنظف ومرطب طبيعي لإزالة خلايا الجلد الميتة والبثور. يعمل على ترطيب الطبقة العليا من خلايا الجلد الميتة، مما يُهيئ البشرة للتقشير، ليجعل بشرتك ناعمة ونظيفة. بالإضافة إلى ذلك، ينظف الصابون البشرة، يشد المسام، ويخلصها من التصبغات، خاصة في الأماكن المعرضة للجفاف والاسمرار مثل المرفقين، وتحت الإبطين، والمناطق الحساسة    بللي الجسم ودلكيه بالصابون المغربي كجزء من روتينك اليومي. يمكن أيضًا ترك الصابون على الجسم لمدة 10 دقائق ثم شطفه بالماء الدافئ. بعد ذلك، يُستخدم الليف المغربي لفرك البشرة للحصول على بشرة ناعمة وحريرية. يُنصح باستخدام هذه الطريقة مرة واحدة في الأسبوع.', category: 'body' },
        { id: 16, name: 'ISIS PHARMA SECALIA DS Creme visage nourrissante - 40ml', image: 'https://wonderbeauties.love/cdn/shop/files/3031500311652.webp?v=1720013892&width=900', price: '$45', description: 'استمتعي ببشرة ناعمة ورطبة طوال اليوم مع Secalia DS، الذي يوفر العناية الفائقة للبشرة الجافة بفضل تركيبته الطبيعية الفعالة. مناسب لجميع أفراد العائلة  ضعي Secalia DS على المناطق المصابة مرة إلى مرتين يومياً', category: 'body' },
        { id: 17, name: 'COSMO Olive Oil Nourishing Conditioner-1000ml', image: 'https://wonderbeauties.love/cdn/shop/files/F3CB618B-BC23-4361-9E71-3AD711E813B6.jpg?v=1707726055&width=1800', price: '$48', description: '         بلسم زيت الزيتون مثالي لأي شخص يبحث عن تغذية وترطيب والحفاظ على صحة الشعر. هذه التركيبة المصنوعة معززة بزيت الزيتون، المعروف بخصائصه المضادة للأكسدة التي تقوي وتغذي بصيلات الشعر، مما ينتج عنه       شعر أقوى وأكثر صحة       بلسم زيت الزيتون خالٍ من السلفات ومصنوع من مكونات طبيعية لتوفير علاج لطيف وفعال لجميع أنواع الشعر', category: 'hair' },
        { id: 18, name: 'Luseta Tea Tree & Mint Shampoo-500ml', image: 'https://wonderbeauties.love/cdn/shop/files/TeaTree_MintShampoo.jpg?v=1704628218&width=1800', price: '$42', description: 'تم تركيب شامبو شجرة الشاي والنعناع بمكونات لطيفة محببة لفروة الرأس للمساعدة في فك تشابك خصلات شعرك وإنعاشها. تساعد الخصائص المضادة للالتهابات لزيت شجرة الشاي والنعناع على تهدئة فروة الرأس من التهيج والقضاء على القشرة بينما تجعل الشعر أكثر لمعانًا. يقلل تهيج فروة الرأس والقشرة , يحبس الرطوبة في كل خصلة من الشعر. يزيل التشابك ويعزز سهولة التحكم في الشعر. يناسب جميع انواع الشعر', category: 'hair' },
        { id: 19, name: 'Mura Silicone Ice Mold', image: 'https://wonderbeauties.love/cdn/shop/files/DF5AE087-4120-4A19-9E69-A1EFD67090FA.jpg?v=1721737676&width=1800', price: '$5', description: 'قالب الثلج السيليكوني هو الخيار المثالي للحصول على مكعبات ثلج عالية الجودة بسهولة وسرعة. يتميز بتصميمه الأنيق والعملي، مصنوع من السيليكون الغذائي الآمن للاستخدام مع الأطعمة والمشروبات. بفضل مرونته، يمكنك إخراج مكعبات الثلج بسهولة دون عناء أو تكسير.    ', category: 'skincare' },
        { id: 20, name: 'Sence Beauty Eye Mask Hydrogel-6ml', image: 'https://wonderbeauties.love/cdn/shop/files/5BDD6D0C-1715-4C42-8C25-97C9857BC25E.jpg?v=1712223891&width=1800', price: '$42', description: 'تم تصميم قناع العين هذا لتوفير رعاية مكثفة وتنشيطية لبشرتك. مع صيغة غنيةبالفيتامينات و المواد المرطبة، ستلاحظين تحسناً ملحوظاً في ترطيب ومرونة بشرتك.', category: 'skincare' },
        { id: 21, name: 'yasenka Skinage Hair Boost-500ml', image: 'https://wonderbeauties.love/cdn/shop/products/3859892980559.png?v=1677491385&width=900', price: '$40', description: 'يحتوي على الكيراتين، الزنك، فيتامينات ب المركبة (ب1, ب2, ب6, ب12)، حمض الفوليك، البيوتين، حمض البانتوثنيك والنياسين. يقوي بنية الشعر. النتائج مؤكدة بتجارب سريرية. يحفز نمو الشعر الجديد الصغير. يقلل من تساقط الشعر بنسبة تصل إلى 50% في الأشهر الثلاثة الأولى من الاستخدام. تركيبة مبتكرة للشعر التالف تحتوي على كيراتين. يحل مشكلة تساقط الشعر من الداخل، ولا يقوم فقط بـ "إخفائها". يستعيد لمعان الشعر وكثافته التي كان   عليها من قبل', category: 'skincare' },
        { id: 22, name: 'Pasta Capitano Sistema Ox Active', image: 'https://wonderbeauties.love/cdn/shop/files/8002140033704.jpg?v=1718450131&width=1800', price: '$15', description: 'منتج يشمل كل ما تحتاجينه لتبييض الأسنان بلطف وبشكل كامل في المنزل. فقط خمس خطوات بسيطة ستساعدك في الحصول على الابتسامة التي تحلمين بها   يفتح الأسنان بعدة درجات في 14 يومًا   لا يضر بمينا الأسنان      يزيل بفعالية البقع الناتجة عن التدخين والمشروبات الملونة   مناسب للأطقم والغرسات   نتائج مرئية بعد 10 أيام من الاستخدام المنتظم', category: 'skincare' },
        { id: 23, name: 'Beauty of Joseon Glow Replenishing Rice Milk-150ml', image: 'https://wonderbeauties.love/cdn/shop/files/8809968130239.jpg?v=1722758079&width=1800', price: '$25', description: 'سيروم  حليب الأرز لتحقيق أقصى فائدة للبشرة. يحتوي هذا التونر على مستخلص الأرز الغني بالعناصر الغذائية والأحماض الأمينية التي تخترق بعمق لترطيب وتنعيم البشرة الجافة والخشنة. يتميز بتركيبة ذات طبقتين: طبقة مرطبة مليئة بمستخلص الأرز وطبقة مسحوق للتحكم في الزهم. يساعد في تهدئة البشرة الحساسة ويعمل على تحسين ملمس البشرة، مما يجعله خيارًا مثاليًا لتحقيق بشرة مشرقة ومتألقة   امسحي وجهك بلطف باستخدام القطنة المشبعة بالتونر. بدءًا من منطقة الجبهة وانتقلي بلطف نحو الأسفل. انتظري حتى يجف التونر على وجهك. لا تقومي بغسله.بعد ذلك، يمكنك متابعة روتين العناية بالبشرة الخاص بك   بمراهم أو مستحضرات ترطيب إذا كنت تستخدمها ', category: 'face' },
        { id: 24, name: 'Revuele Liquid Facial Exfoliant 7% AHA/PHA BLEND + HA for dry skin-125ml', image: 'https://wonderbeauties.love/cdn/shop/files/5060565106093.webp?v=1722506575&width=1800', price: '19', description: 'هو حل تنعيم يومي فائق اللطف يتكون من مزيج من أحماض التقشير الدقيقة. يدعم عملية تجديد البشرة الطبيعية عن طريق إزالة الخلايا الميتة لتوحيد لون البشرة وملمسها. مثالي للبشرة الجافة، يكشف هذا المقشر عن بشرة أكثر نعومة وملمسًا أنعم وأكثر نقاءً    يُطبق في المساء على وجه ورقبة نظيفين باستخدام أطراف الأصابع أو وسادة قطنية. تجنبي منطقة العينين. اتركيه ليتم امتصاصه، ثم تابعي بوضع مرطب', category: 'face' },
        { id: 25, name: 'Cerave Healing Ointment Skin Protectant Soothes Dry Cracked and Chafed Skin-340 g', image:'https://wonderbeauties.love/cdn/shop/products/s-l1600_bed5e495-7113-4165-9a72-9ff35488897f.jpg?v=1706001597&width=1800', price: '$11', description: 'مرهم معالج تم تركيبه لحماية البشرة وتهدئتها وترطيبها بشكل مؤقت مناسب للبشرة الجافة والمتشققة والمتهيجة خالي من العطور واللانولين يحتوي على سيراميد الذي يساعد على استعادة والحفاظ على حاجز البشرة الطبيعي حمض الهيالورونيك: يساعد على الحفاظ على رطوبة البشرة الطبيعية لا يسبب انسداد المسامات، وخالي من المواد الحافظة والأصباغ يشكل طبقة واقية لتعزيز وظيفة حاجز الرطوبة الطبيعي للبشرة لمدة تصل إلى 8 ساعات يساعد المنتج على الاحتفاظ بالرطوبة طوال الليل', category: 'face' },
       




    ];

    const addToCart = (product, quantity) => {
        setCart([...cart, { product, quantity }]);
        setCartItemCount(cartItemCount + quantity);
        alert(`${product.name} added to cart!`);
    };

    return (
        <Router>
            <Navbar cartItemCount={cartItemCount} />
            <Routes>
                <Route path="/" element={<HomePage products={products} />} />
                <Route path="/product/:id" element={<ProductPage products={products} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products/:category" element={<ProductListPage products={products} />} />
                <Route path="/products" element={<ProductsPage products={products} />} />
                <Route path="/Skintype" element={<SkinTypePage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/products/:category/:id" element={<ProductDetailsPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

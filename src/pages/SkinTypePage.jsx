import React, { useState } from 'react';
import '../App.css';

function App() {
    const [answers, setAnswers] = useState({
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: ''
    });
    const [result, setResult] = useState('');
  
    const handleAnswerChange = (e) => {
      setAnswers({
        ...answers,
        [e.target.name]: e.target.value
      });
    };
  
    const calculateResult = () => {
      const counts = { dry: 0, oily: 0, balanced: 0, sensitive: 0 };
  
      Object.values(answers).forEach(answer => {
        counts[answer]++;
      });
  
      let resultText = '';
  
      if (counts.dry > counts.oily && counts.dry > counts.balanced && counts.dry > counts.sensitive) {
        resultText = 'بشرة جافة: استخدمي مرطبات غنية ومغذية وتجنبي المنظفات القاسية.';
      } else if (counts.oily > counts.dry && counts.oily > counts.balanced && counts.oily > counts.sensitive) {
        resultText = 'بشرة دهنية: استخدمي منظفات تحتوي على حمض الساليسيليك أو حمض الجليكوليك، وابحثي عن منتجات خالية من الزيت.';
      } else if (counts.balanced > counts.dry && counts.balanced > counts.oily && counts.balanced > counts.sensitive) {
        resultText = 'بشرة متوازنة: استمري في روتين العناية بالبشرة الحالي واستخدمي واقي الشمس.';
      } else {
        resultText = 'بشرة حساسة: اختاري منتجات خالية من العطور والكحول، وتجنبي المكونات المهيجة.';
      }
  
      setResult(resultText);
    };
  
    return (
      <div className="App">
        <h1>اختبار العناية بالبشرة</h1>
        <form>
          <div className="question">
            <p>1. كيف تشعر بشرتك بعد غسل وجهك؟</p>
            <label>
              <input type="radio" name="q1" value="dry" onChange={handleAnswerChange} checked={answers.q1 === 'dry'} /> جافة ومشدودة
            </label><br />
            <label>
              <input type="radio" name="q1" value="oily" onChange={handleAnswerChange} checked={answers.q1 === 'oily'} /> دهنية ولزجة
            </label><br />
            <label>
              <input type="radio" name="q1" value="balanced" onChange={handleAnswerChange} checked={answers.q1 === 'balanced'} /> متوازنة ومريحة
            </label><br />
            <label>
              <input type="radio" name="q1" value="sensitive" onChange={handleAnswerChange} checked={answers.q1 === 'sensitive'} /> حساسة ومتهيجة
            </label>
          </div>
          <div className="question">
            <p>2. ما هي المشاكل الأكثر شيوعاً التي تواجهينها مع بشرتك؟</p>
            <label>
              <input type="radio" name="q2" value="dry" onChange={handleAnswerChange} checked={answers.q2 === 'dry'} /> الجفاف والقشور
            </label><br />
            <label>
              <input type="radio" name="q2" value="oily" onChange={handleAnswerChange} checked={answers.q2 === 'oily'} /> اللمعان والزيت الزائد
            </label><br />
            <label>
              <input type="radio" name="q2" value="balanced" onChange={handleAnswerChange} checked={answers.q2 === 'balanced'} /> لا توجد مشاكل كبيرة، فقط عيوب عرضية
            </label><br />
            <label>
              <input type="radio" name="q2" value="sensitive" onChange={handleAnswerChange} checked={answers.q2 === 'sensitive'} /> الاحمرار والحساسية
            </label>
          </div>
          <div className="question">
            <p>3. كيف تصفين ملمس بشرتك؟</p>
            <label>
              <input type="radio" name="q3" value="dry" onChange={handleAnswerChange} checked={answers.q3 === 'dry'} /> خشن وجاف
            </label><br />
            <label>
              <input type="radio" name="q3" value="oily" onChange={handleAnswerChange} checked={answers.q3 === 'oily'} /> ناعم ولكن دهني
            </label><br />
            <label>
              <input type="radio" name="q3" value="balanced" onChange={handleAnswerChange} checked={answers.q3 === 'balanced'} /> ناعم ومتوازن
            </label><br />
            <label>
              <input type="radio" name="q3" value="sensitive" onChange={handleAnswerChange} checked={answers.q3 === 'sensitive'} /> حساس وملتهب
            </label>
          </div>
          <div className="question">
            <p>4. كيف تتفاعل بشرتك مع المنتجات الجديدة؟</p>
            <label>
              <input type="radio" name="q4" value="dry" onChange={handleAnswerChange} checked={answers.q4 === 'dry'} /> تصبح جافة وقشرية
            </label><br />
            <label>
              <input type="radio" name="q4" value="oily" onChange={handleAnswerChange} checked={answers.q4 === 'oily'} /> تبدأ في اللمعان أو التعرق
            </label><br />
            <label>
              <input type="radio" name="q4" value="balanced" onChange={handleAnswerChange} checked={answers.q4 === 'balanced'} /> لا تتغير كثيراً
            </label><br />
            <label>
              <input type="radio" name="q4" value="sensitive" onChange={handleAnswerChange} checked={answers.q4 === 'sensitive'} /> تظهر الطفح الجلدي أو الاحمرار
            </label>
          </div>
          <div className="question">
            <p>5. كم مرة تستخدمين المقشرات أو منتجات التقشير؟</p>
            <label>
              <input type="radio" name="q5" value="dry" onChange={handleAnswerChange} checked={answers.q5 === 'dry'} /> نادراً أو أبداً
            </label><br />
            <label>
              <input type="radio" name="q5" value="oily" onChange={handleAnswerChange} checked={answers.q5 === 'oily'} /> عدة مرات في الأسبوع
            </label><br />
            <label>
              <input type="radio" name="q5" value="balanced" onChange={handleAnswerChange} checked={answers.q5 === 'balanced'} /> مرة في الأسبوع أو أقل
            </label><br />
            <label>
              <input type="radio" name="q5" value="sensitive" onChange={handleAnswerChange} checked={answers.q5 === 'sensitive'} /> كثيراً، ولكن بشرتي تصبح حساسة
            </label>
          </div>
          <button type="button" onClick={calculateResult}>احسبي نتيجتي</button>
        </form>
        {result && <div className="result">{result}</div>}
  
        <div className="contact">
          <p>تحتاجين إلى مساعدة إضافية؟ تواصلي معنا عبر WhatsApp:</p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <button>الدردشة عبر WhatsApp</button>
          </a>
        </div>
      </div>
    );
  }
  
  export default App;
  
<head>
  <title>Wikipedia Bios Analysis</title>

  <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.js"></script> -->
  <script src="https://d3js.org/d3.v6.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>
  <!--script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

  <!-- For story dropdown -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.js"></script>
  <link rel="stylesheet" href="https://spin.js.org/spin.css">


  <script type="text/javascript" src="wiki_data_viz.js"></script>
</head>
<body>
  <div class="container content-left">
    <div class="row" style="margin-top: 10px;">
      <div class="col-12">
        <h1 style="">Controlled Analyses of Social Biases in Wikipedia Bios</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 col-xs-12">

        <p><em>Quick links:</em>&nbsp;
          <a href="https://github.com/anon102021/wiki_bias_anon">[code and data]</a>
          &nbsp;
          <a href="" data-target="#contactUs" data-toggle="collapse" onclick="return false;">[contact us]</a>
          &nbsp;
        </p>
        <div id="contactUs" class="collapse">
          <p>
            Contact the first author: [ANONYMIZED]
          </p>
          <hr>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10 col-xs-12">
            <h4>Abstract</h4>
            <p style="font-size: 10pt; width: 100%;display: inline-block;text-align: justify;">
                Social biases on Wikipedia, a widely-read global platform, could greatly influence public opinion.
While prior research has examined man/woman gender bias in biography articles, possible influences of confounding variables limit conclusions.
In this work, we present a methodology for reducing the effects of confounding variables in analyses of Wikipedia biography pages. Given a target corpus for analysis (e.g. biography pages about women), we present a method for constructing a comparison corpus that matches the target corpus in as many attributes as possible, except the target attribute (e.g. the gender of the subject).
We evaluate our methodology by developing metrics to measure how well the comparison corpus aligns with the target corpus.
We then examine how articles about gender and racial minorities (cisgender women, non-binary people, transgender women, and transgender men; African American, Asian American, and Hispanic/Latinx American people) differ from other articles, including analyses driven by social theories like intersectionality.
In addition to identifying suspect social biases, our results show that failing to control for confounding variables can result in different conclusions and mask biases.
Our contributions include methodology that facilitates further analyses of bias in Wikipedia articles, findings that can aid Wikipedia editors in reducing biases, and framework and evaluation metrics to guide future work in this area.
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr>

    <div>
      <h3>Data Display</h3>
      <p>
        Select one of the target groups described in our paper to see full results
      </p>

      <select id="storySelecter" onchange="loadData(this.value)" class="selectpicker" data-live-search="false" style="width:80%;">
        <option selected disabled value> -- select a target group -- </option>
        <option value="Asian American">Asian American</option>
        <option value="African American">African American</option>
        <option value="Latino American">Hispanic/Latino American</option>
        <option value="NonBinary">Non-binary</option>
        <option value="Transgender men">Transgender men</option>
        <option value="Transgender women">Transgender women</option>
        <option value="Cisgender women">Cisgender women</option>
        <option value="African American women vs. (unmarked) American women">African American women vs. (unmarked) American women</option>
        <option value="African American women vs. African American men">African American women vs. African American men</option>
        <option value="African American women vs. (unmarked) American men">African American women vs. (unmarked) American men</option>
      </select>
    </div>

      <hr>
    <div id="resultsViz" style="display: none;">

      <div class="row">
      <div>Below displays metrics used to compare how effectively our matching method balances confounding variables in the corpus. On the left, we display metrics after matching, and on the right, we display metrics without matching. Each metric measures differences between the target and comparison corpora, meaning lower metrics indicates the corpora are well-balanced. We refer to the paper for details on how each metric is calculated. In this setting, only Standardized Mean Difference (SMD) metrics are meaningful. In SMD, we exclude values that we expect to differ between target and comparison corpora, but this exclusion is not possible for other metrics, and we report them only for completeness.</div>
        <div class="col-6"><h4>Results after tf-idf pivot-slope matching</h4></div>
        <div class="col-6"><h4>Unmatched results</h4></div>
      </div> <!-- Close row -->


      <div class="row">
        <div class="col-5 blockViz" id="matched_assessViz" >Data placeholder</div>
        <div class="col-5 blockViz" id="unmatched_assessViz">Data placeholder</div>
      </div> <!-- Close row -->
      <hr>

      <div class="row">
      <div>Below displays summary statistics for the target and comparison sets, with and without matching. p-values assess whether or not the difference between the two corpora is significant and are computed using a paired t-test.</div>
        <div class="col-6"><h4>Results after tf-idf pivot-slope matching</h4></div>
        <div class="col-6"><h4>Unmatched results</h4></div>
      </div> <!-- Close row -->

      <div class="row">
        <div class="col-5 blockViz" id="matched_statsViz" >Data placeholder</div>
        <div class="col-5 blockViz" id="unmatched_statsViz">Data placeholder</div>
      </div> <!-- Close row -->
      <hr>

      <div class="row">
      <div>We display words that are overrepresented in target or comparison artices, computed using log-odds with a Dirichlet prior. A positive score indicates stronger association with the target set.</div>
        <div class="col-6"><h4>Results after tf-idf pivot-slope matching</h4></div>
        <div class="col-6"><h4>Unmatched results</h4></div>
      </div> <!-- Close row -->

      <div class="row">
        <div class="col-5 blockViz" id="matched_odds" >Data placeholder</div>
        <div class="col-5 blockViz" id="unmatched_odds">Data placeholder</div>
      </div> <!-- Close row -->
      <hr>

      <div class="row">
            <div>For all second-level sections that at least t target or comparison articles contain, we compute the average percentage of each article devoted to that section (number of tokens in section / total number of tokens in article, averaged across target/comparison group). We measure if the difference in the percentage of articles devoted to each section is significant between the target and comparison groups using a paired t-test with a Benjaminin Hochberg correction. We set t as follows: all race/ethnicity (100), intersectional (50), women (500), transgendermen/women (20), non-binary (50). Thresholds primarily exclude results that are notstatistically significant, and we use them merely for convenience of output.</div>
        <div class="col-10 blockViz" id="matched_sections" >Data placeholder</div>
        <!-- div class="col-5 blockViz" id="unmatched_sections">Data placeholder</div -->
      </div> <!-- Close row -->
      <hr>

      <div class="row">
      <div> For all languages that at least a threshold t number of target or comparison articles are available in, we compute the percentage of target vs. comparison articles that are available (e.g. are target or comparison articles more likely to be available in German?). We compute significance using McNemar’s test with a Benjaminin Hochberg multiple hypothesis correction. We set t as described above.</div>
        <div class="col-10 blockViz" id="language_availability" >Data placeholder</div>
      </div> <!-- Close row -->
      <hr>

      <div class="row">
       <div> For the top 10 most edited languages (English, French, Arabic, Russian, Japanese, Italian, Spanish, German, Portuguese, and Chinese), for all target-comparison pairs where both members of the pair are available in the language, we compare article lengths and number of sections in the specified language. We compute if the difference between the target and comparison groups is significant using a paired t-test with a Benjaminin Hochberg multiple hypothesis correction.</div>
        <div class="col-10 blockViz" id="language_length" >Data placeholder</div>
      </div> <!-- Close row -->
      <hr>

      <div class="row">
      <div>For the top 10 most edited languages, for all target-comparison pairs where both members of the pair are available in the language, we compare article lengths and number of sections in English. These results compare the same set of articles and statistics as the preceding section, but compare English versions of articles. Differences in statistics between this table and the previous one are likely to indicate bias.  We compute if the difference between the target and comparison groups is significant using a paired t-test with a Benjaminin Hochberg multiple hypothesis correction.</div>
       <div class="col-10 blockViz" id="languageEnglishlength" >Data placeholder</div>
      </div> <!-- Close row -->
      <hr>

      <div class="row">
        <div>We display a random sample of matched pairs generated by our algorithm</div>
        <div class="col-10 blockViz" id="ExamplePairs" >Data placeholder</div>
      </div> <!-- Close row -->
      <hr>





    </div> <!-- Close Results -->

    <hr>
    <div class="row">
      <div class="col-12">
        <em>Read our paper for more:</em>
          <br>
          Anonymous Authors (2021).<br>
          <strong>Controlled Analyses of Social Biases in Wikipedia Bios</strong>. <em>In submission</em>
      </div>
    </div>

    <div class="row justify-content-center" style="margin: 30px 0;">
    </div>
  </div>
</body>

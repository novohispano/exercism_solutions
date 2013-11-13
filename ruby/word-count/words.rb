class Words
  def initialize(input)
    @words = input.split(" ")
  end

  def count
    counts = Hash.new(0)
    @words.each do |word|
      counts[word] += 1
    end
    counts
  end
end